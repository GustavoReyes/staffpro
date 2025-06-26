import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Employee } from '../../model/employee';
import { Department } from '../../model/department';
import { EmployeesService } from '../../services/Employees/employees.service';
import { DepartmentsService } from '../../services/Departments/departments.service';
import { AuthService } from '../../services/Auth/auth.service';

@Component({
  selector: 'app-admin-employee-register',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './admin-employee-register.component.html',
  styleUrl: './admin-employee-register.component.css'
})

export class AdminEmployeeRegisterComponent  {
  email: string = '';
  employee: Partial<Employee> = {};
  empleadoExistente: boolean = false;
  cargando: boolean = false;
  selectedDepartment: number = 0;
  departments: Department[] = [];
  employees: Employee[] = [];
  isLoaded = false;
  isAdmin = false;
  filteredEmployees: Employee[] = [];
  filteredDepartments: any[] = [];

  constructor(private employeesService: EmployeesService,
    private departmentsService: DepartmentsService,
    private authService: AuthService) { }

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

    this.cargarDepartamentos();
  }

  mensajeExito: string | null = null;
  mensajeError: string | null = null;

  registrarEmpleado() {
    this.employee.department_id = this.selectedDepartment;
    this.employeesService.registerEmployee(this.email, this.employee).subscribe({
      next: (res) => {
        if (res.success) {
          this.mensajeExito = 'Empleado registrado correctamente.';
          this.mensajeError = null;
          this.resetFormulario();
          setTimeout(() => this.mensajeExito = null, 4000);
        } else {
          const err = res.error;
          if (err?.status === 404) {
            this.mensajeError = 'Dirección de registro no encontrada (404)';
          } else if (err?.status === 409) {
            this.mensajeError = 'Ya existe un empleado con ese email.';
          } else {
            this.mensajeError = 'No se pudo registrar el empleado. Todos los campos son obligatorios.';
          }
          this.mensajeExito = null;
          setTimeout(() => this.mensajeError = null, 4000);
        }
      },
      error: () => {
        this.mensajeError = 'Error inesperado al registrar el empleado.';
        this.mensajeExito = null;
        setTimeout(() => this.mensajeError = null, 4000);
      }
    });
  }

  resetFormulario() {
    this.email = '';
    this.employee = {
      name: '',
      dni: '',
      hire_date: " ",
      work_day: 0,
      work_hour: " ",
      department_id: this.departments.length > 0 ? this.departments[0].id : 0
    };

  }

  cargarDepartamentos() {
    this.departmentsService.allDepartmenst().subscribe({
      next: (departments) => {
        this.departments = departments;
        if (departments.length > 0) {
          this.selectedDepartment = departments[0].id;
        }
      }
    })

  }


}
