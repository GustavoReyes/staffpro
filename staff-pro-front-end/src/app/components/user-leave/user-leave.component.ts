import { Component, OnInit } from '@angular/core';
import { LeaveRequestsService } from '../../services/LeaveRequests/leave-requests.service';
import { LeaveRequest } from '../../model/leaverequest';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/Auth/auth.service';

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

  constructor(
    private leaveRequestsService: LeaveRequestsService,
    private authService: AuthService
  ) {
    this.newLeave = new LeaveRequest(this.getCurrentUserId());
  }

  ngOnInit() {
    this.fetchLeaves();
  }

  fetchLeaves() {
    this.loading = true;
    this.leaveRequestsService.getAll().subscribe({
      next: (data) => {
        this.leaveRequests = data.filter(
          leaveRequest => leaveRequest.id_user_fk === this.getCurrentUserId()
        );
        this.loading = false;
      },
      error: () => {
        this.error = 'Error al cargar las solicitudes';
        this.loading = false;
      }
    });
  }

  createLeave() {
    const startDate = this.newLeave.start_date
      ? new Date(this.newLeave.start_date).toISOString()
      : undefined;
    const endDate = this.newLeave.end_date
      ? new Date(this.newLeave.end_date).toISOString()
      : undefined;

    const leaveRequestToSend = {
      id_user_fk: 1, // Para depurar usando la id de usuario 1, eliminar en un futuro.
      // id_user_fk: this.getCurrentUserId(), // Comentado para depurar, usar en un futuro.
      type: this.newLeave.type,
      start_date: startDate,
      end_date: endDate,
      status: this.newLeave.status || 'pending'
    };

    console.log('Enviando:', leaveRequestToSend); // Para depurar, visualizando la request en consola, eliminar en un futuro.

    this.leaveRequestsService.create(leaveRequestToSend).subscribe({
      next: () => {
        this.fetchLeaves();
        this.newLeave = new LeaveRequest(this.getCurrentUserId());
      },
      error: (err) => {
        this.error = 'Error al crear la solicitud';
        console.error('Detalles del error:', err.error); // Para depurar y ver el error en la consola, eliminar en un futuro.
      }
    });
  }

  getCurrentUserId(): number {
    const decoded = this.authService.getDecodedToken();
    return decoded ? decoded.id_user : 0;
  }
}
