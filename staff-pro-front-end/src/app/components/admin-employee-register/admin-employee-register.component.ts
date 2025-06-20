import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Employee } from '../../model/employee';
import { Department } from '../../model/department';
import { EmployeesService } from '../../services/Employees/employees.service';
import { DepartmentsService } from '../../services/Departments/departments.service';

@Component({
  selector: 'app-admin-employee-register',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './admin-employee-register.component.html',
  styleUrl: './admin-employee-register.component.css'
})

export class AdminEmployeeRegisterComponent implements OnInit{
  email: string = '';
  employee: Partial<Employee> = {};
  empleadoExistente: boolean = false;
  cargando: boolean = false;
  selectedDepartment: number = 0;
  departments: Department[] = [];
  ngOnInit(): void {
    this.cargarDepartamentos();
  }

  constructor(private employeesService: EmployeesService,
              private departmentService: DepartmentsService ) {}

  buscarEmpleado() {
    if (!this.email) return;
    this.cargando = true;
    this.employeesService.employeeByEmail(this.email).subscribe({
      next: (res) => {
        this.employee = res;
        this.empleadoExistente = true;
        this.cargando = false;
      },
      error: () => {
        this.employee = { email: this.email } as any;
        this.empleadoExistente = false;
        this.cargando = false;
      }
    });
  }

  registrarEmpleado() {
     this.employee.department_id = this.selectedDepartment;
    this.employeesService.registerEmployee(this.email, this.employee).subscribe({
      next: () => alert('Empleado registrado correctamente'),
      error: () => alert('Error al registrar empleado')
    });
  }

  

cargarDepartamentos() {
  this.departmentService.allDepartmenst().subscribe({
    next: (departments) => {
      this.departments = departments;
      if (departments.length > 0) {
        this.selectedDepartment = departments[0].id;
      }
}})

}


}
