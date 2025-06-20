
import { Component } from '@angular/core';
import { DepartmentsService } from '../../services/Departments/departments.service';
import { EmployeesService } from '../../services/Employees/employees.service';
import { Employee } from '../../model/employee';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Department } from '../../model/department';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.css'
})
export class EditEmployeeComponent {
  id_user!: number;
  employee: Partial<Employee> = {};
  selectedDepartment: number = 0;
  departments: Department[] = [];


  constructor(
    private route: ActivatedRoute,
    private employeesService: EmployeesService,
    private departmentsService: DepartmentsService,
    private router: Router
  ) { }

  ngOnInit(): void {
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
        console.log('Empleado actualizado:', response);
        alert('Empleado actualizado correctamente');
      },
      error: (error) => {
        console.error('Error actualizando empleado:', error);
        alert('Error al actualizar el empleado');
      }
    });
  }

}
