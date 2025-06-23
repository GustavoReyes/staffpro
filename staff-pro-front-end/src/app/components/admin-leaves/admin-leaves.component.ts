import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LeaveRequestsService } from '../../services/LeaveRequests/leave-requests.service';
import { LeaveRequest } from '../../model/leaverequest';
import { Employee } from '../../model/employee';
import { AuthService } from '../../services/Auth/auth.service';
import { EmployeesService } from '../../services/Employees/employees.service';
import { DepartmentsService } from '../../services/Departments/departments.service';
import { Department } from '../../model/department';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-leaves',
  templateUrl: './admin-leaves.component.html',
  styleUrl: './admin-leaves.component.css',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink]
})

export class AdminLeavesComponent implements OnInit {
  leaveRequests: LeaveRequest[] = [];
  loading = false;
  error = '';

  isLoaded = false;
  isAdmin = false;
  filteredEmployees: Employee[] = [];
  filteredDepartments: any[] = [];
  selectedDepartment: string = '';
  departments: Department[] = [];
  employees: Employee[] = [];

  constructor(private leaveRequestsService: LeaveRequestsService,
    private authService: AuthService,
    private employeesService: EmployeesService,
    private departmentsService: DepartmentsService
  ) { }

  ngOnInit() {

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
          this.fetchLeaves();
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
  }

  fetchLeaves() {
    this.loading = true;
    this.leaveRequestsService.getAll().subscribe({
      next: (data) => {
        this.leaveRequests = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Error al cargar las solicitudes';
        this.loading = false;
      }
    });
  }

  mensajeExito: string | null = null;
  mensajeError: string | null = null;

  updateStatus(leave: LeaveRequest, newStatus: 'pending' | 'approved' | 'rejected') {
    const updated = { ...leave, status: newStatus };
    this.leaveRequestsService.update(leave.id!, updated).subscribe({
      next: () => {
        leave.status = newStatus;
        this.mensajeExito = 'Estado de la solicitud actualizado correctamente.';
        this.mensajeError = null;
        setTimeout(() => this.mensajeExito = null, 4000);
      },
      error: () => {
        this.mensajeError = 'Error al actualizar el estado de la solicitud';
        this.mensajeExito = null;
        setTimeout(() => this.mensajeError = null, 5000);
      }
    });
  }
}
