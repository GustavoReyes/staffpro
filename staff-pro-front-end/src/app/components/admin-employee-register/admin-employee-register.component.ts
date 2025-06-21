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


mensajeExito: string | null = null;
mensajeError: string | null = null;

registrarEmpleado() {
  this.employee.department_id = this.selectedDepartment;


 this.employeesService.registerEmployee(this.email, this.employee).subscribe((res) => {
  if (res.success) {
    this.mensajeExito = '✅ Empleado registrado correctamente.';
    this.mensajeError = null;
    this.resetFormulario();
    setTimeout(() => this.mensajeExito = null, 3000);
  } else {
    const err = res.error;
    console.error(err);

    if (err?.status === 404) {
      this.mensajeError = '❌ Dirección de registro no encontrada (404)';
    } else if (err?.status === 409) {
      this.mensajeError = '⚠️ Ya existe un empleado con ese email.';
    } else {
      this.mensajeError = '❌ No se pudo registrar el empleado. Todos los campos son obligatorios.';
    }

    this.mensajeExito = null;
    setTimeout(() => this.mensajeError = null, 4000);
  }
});}

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
  this.departmentService.allDepartmenst().subscribe({
    next: (departments) => {
      this.departments = departments;
      if (departments.length > 0) {
        this.selectedDepartment = departments[0].id;
      }
}})

}


}
