import { Component } from '@angular/core';
import { EmployeesService } from '../../services/Employees/employees.service';
import { Employee } from '../../model/employee';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-admin-employees.component',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './admin-employees.component.html',
  styleUrls: ['./admin-employees.component.css'],
})
export class AdminEmployeesComponent {

 email: string = '';
  employee: Partial<Employee> = {};
  empleadoExistente: boolean = false;
  cargando: boolean = false;

  constructor(private employeesService: EmployeesService) {}

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
    this.employeesService.registerEmployee(this.email, this.employee).subscribe({
      next: () => alert('Empleado registrado correctamente'),
      error: () => alert('Error al registrar empleado')
    });
  }

  actualizarEmpleado() {
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


}


