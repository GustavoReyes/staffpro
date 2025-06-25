import { Component } from '@angular/core';
import { DepartmentsService } from '../../services/Departments/departments.service';
import { EmployeesService } from '../../services/Employees/employees.service';
import { Employee } from '../../model/employee';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Department } from '../../model/department';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/Auth/auth.service';

@Component({
  selector: 'app-admin-employees-edit',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './admin-employees-edit.component.html',
  styleUrl: './admin-employees-edit.component.css'
})
export class AdminEmployeesEditComponent {
  id_user!: number;
  employee: Partial<Employee> = {};
  selectedDepartment: number = 0;
  departments: Department[] = [];
  isLoaded = false;
  isAdmin = false;
  filteredEmployees: Employee[] = [];
  filteredDepartments: any[] = [];
  employees: Employee[] = [];
  mensajeExito: string | null = null;
  mensajeError: string | null = null;


  constructor(
    private route: ActivatedRoute,
    private employeesService: EmployeesService,
    private departmentsService: DepartmentsService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {

    const userId = this.authService.getUserId();
    if (!userId) {
      this.isLoaded = true;
      this.isAdmin = false;
      return;
    }

    this.employeesService.getEmployees().subscribe({
      next: (employees) => {
        const employee = employees.find(emp => emp.id_user === userId);
        this.isAdmin = !!employee && employee.department_id === 1;
        this.isLoaded = true;

        if (this.isAdmin) {
          this.departmentsService.allDepartmenst().subscribe({
            next: (data) => {
              this.departments = data;
              this.filteredDepartments = data;
            },
            error: (error) => console.error('Error cargando departamentos:', error)
          });

          this.employees = employees.map(emp => {
            emp.department_id = Number(emp.department_id);
            return emp;
          });
        }
      },
      error: (error) => {
        this.isLoaded = true;
        this.isAdmin = false;
        console.error('Error cargando empleados:', error);
      }
    });


    this.id_user = Number(this.route.snapshot.paramMap.get('id_user'));

    if (isNaN(this.id_user)) {
      console.error('ID inválido en la URL');
      return;
    }
    this.loadDepartments();
    this.loadEmployee();
  }

  loadDepartments() {
    this.departmentsService.allDepartmenst().subscribe({
      next: (departments) => (this.departments = departments),
      error: (err) => console.error('Error cargando departamentos', err)
    });
  }

  loadEmployee() {
    this.employeesService.employeeByUserId(this.id_user).subscribe({
      next: (response) => {
        this.employee = response;
        this.selectedDepartment = response.department_id;


      },
      error: (error) => {
        console.error('Error al obtener el empleado:', error);
      }
    });
  }

  actualizarEmpleado() {
    this.employee.department_id = this.selectedDepartment;

    this.employeesService.updateEmployeeById(this.id_user, this.employee).subscribe({
      next: (response) => {
       if(response.success){
        this.mensajeExito = '✅ El empleado ha sido editado correctamente.';
        this.mensajeError = null;

        setTimeout(() => this.mensajeExito = null, 3000);
      } else {
        this.mensajeError = '❌ No se ha podido editar el empleado. Inténtelo más tarde.';
        this.mensajeExito = null;
        setTimeout(() => this.mensajeError = null, 4000);
      }
    },
    error: (err) => {
      this.mensajeError = '❌ Error inesperado al editar el empleado.';
      this.mensajeExito = null;
      setTimeout(() => this.mensajeError = null, 4000);
    }
  });
}

}
