import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/Auth/auth.service';
import { LeaveRequestsService } from '../../services/LeaveRequests/leave-requests.service';
import { LeaveRequest } from '../../model/leaverequest';

@Component({
  selector: 'app-user-leave',
  templateUrl: './user-leave.component.html',
  imports: [CommonModule, FormsModule]
})
export class UserLeaveComponent implements OnInit {
  leaveRequests: LeaveRequest[] = [];
  newLeave: LeaveRequest;
  loading = false;
  error = '';

  // 1. Tipos de permiso en un array
  leaveTypes = [
    { value: 'Vacaciones', label: 'Vacaciones' },
    { value: 'Enfermedad', label: 'Enfermedad' },
    { value: 'Asuntos propios', label: 'Asuntos propios' }
  ];

  // Variables del mensaje de exito/error al crear la leaveRequest
  mensajeExito: string | null = null;
  mensajeError: string | null = null;

  constructor(
    private leaveRequestsService: LeaveRequestsService,
    private authService: AuthService,
    private router:Router
  ) {
    this.newLeave = this.createEmptyLeave();
  }

  // Verificacion de que el usuario tenga un login valido
  ngOnInit() {
    if (!this.authService.getToken?.() || !this.getCurrentUserId()) {
      this.router.navigate(['/login']);
      return;
    }
    this.fetchLeaves();
  }

  getCurrentUserId(): number {
    const decoded = this.authService.getDecodedToken?.();
    return decoded?.id_user || Number(localStorage.getItem('id_user')) || 0;
  }

  createEmptyLeave(): LeaveRequest {
    return {
      id: 0,
      type: '',
      start_date: '',
      end_date: '',
      status: 'pending',
      id_user_fk: this.getCurrentUserId()
    } as LeaveRequest;
  }

  fetchLeaves() {
    this.loading = true;
    this.leaveRequestsService.getAll().subscribe({
      next: (data) => {
        this.leaveRequests = data.filter(
           leaveRequest => leaveRequest.user && Number(leaveRequest.user.id_user) === this.getCurrentUserId()
        );
        console.log(data);
        this.loading = false;
      },
      error: () => {
        this.error = 'Error al cargar las solicitudes';
        this.loading = false;
      }
    });
  }

  createLeave() {
    this.error = '';
    // 2. Validar fechas
    if (!this.newLeave.start_date || !this.newLeave.end_date) {
      this.error = 'Debes seleccionar ambas fechas.';
      return;
    }

    const start = new Date(this.newLeave.start_date);
    const end = new Date(this.newLeave.end_date);

    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      this.error = 'Las fechas seleccionadas no son válidas.';
      return;
    }

    if (end < start) {
      this.error = 'La fecha de fin no puede ser anterior a la fecha de inicio.';
      return;
    }
    // 3. Al crear la solicitud es creada con el status pendiente y el id_user_fk del usuario.
    this.newLeave.status = 'pending';
    this.newLeave.id_user_fk = this.getCurrentUserId();

    this.leaveRequestsService.create(this.newLeave).subscribe({
      next: () => {
        this.fetchLeaves();
        this.newLeave = this.createEmptyLeave();
        this.mensajeExito = 'Solicitud creada correctamente.';
        this.mensajeError = null;
        setTimeout(() => this.mensajeExito = null, 4000);
      },
      error: () => {
        this.error = 'Error al enviar la solicitud';
        this.mensajeError = 'Error al crear la solicitud';
        this.mensajeExito = null;
        setTimeout(() => this.mensajeError = null, 5000);
      }
    });
  }
}
