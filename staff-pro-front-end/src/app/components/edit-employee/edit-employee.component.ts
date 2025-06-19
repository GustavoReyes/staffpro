
import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../../services/Departments/departments.service';
import { EmployeesService } from '../../services/Employees/employees.service';
import { Employee } from '../../model/employee';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Department } from '../../model/department';

@Component({
  selector: 'app-edit-employee',
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.css'
})
export class EditEmployeeComponent {
  id_user:number;
  employee: Partial<Employee> = {};
  selectedDepartment: number = 0;
  departments: Department[] = [];

  constructor(private employeesService: EmployeesService,
              private departmentService: DepartmentsService ) {

    this.id_user = Number(localStorage.getItem('id_user'));
    this.cargarEmpleado();
  }

cargarEmpleado() {
    this.employeesService.employeeByUserId(this.id_user).subscribe({
      next: (response) => {
        this.id_user = response.id_user;
      },
      error: (error) => {
        console.error('Error fetching employee by user ID:', error);
      }

    });
  }
  actualizarEmpleado() {
    this.employee.department_id = this.selectedDepartment;
    this.employeesService.updateEmployeeById(this.id_user, this.employee).subscribe({
      next: (response) => {
        console.log('Employee updated successfully:', response);
        this.cargarEmpleado(); // Refresh the employee data after update
      }
      , error: (error) => {
        console.error('Error updating employee:', error);
      }
    });

    }



    }













