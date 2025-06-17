import { Department } from './../../model/department';
import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/Employees/employees.service';
import { Employee } from '../../model/employee';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DepartmentsService } from '../../services/Departments/departments.service';


@Component({
  selector: 'app-admin-employees.component',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './admin-employees.component.html',
  styleUrls: ['./admin-employees.component.css'],
})
export class AdminEmployeesComponent implements OnInit {

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

  actualizarEmpleado() {
      this.employee.department_id = this.selectedDepartment;
    this.employeesService.updateEmployeeByEmail(this.email, this.employee).subscribe({
      next: () => alert('Empleado actualizado correctamente'),
      error: () => alert('Error al actualizar empleado')
    });
  }

  borrarEmpleado() {
    if (!confirm('¿Seguro que deseas borrar este empleado?')) return;
    this.employeesService.deleteByEmail(this.email).subscribe({
      next: () => {
        alert('Empleado eliminado');
        this.employee = {};
        this.email = '';
        this.empleadoExistente = false;
      },
      error: () => alert('Error al eliminar empleado')
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
