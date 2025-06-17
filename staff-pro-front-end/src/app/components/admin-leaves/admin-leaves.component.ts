import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LeaveRequestsService } from '../../services/LeaveRequests/leave-requests.service';
import { LeaveRequest } from '../../model/leaverequest';

@Component({
  selector: 'app-admin-leaves',
  templateUrl: './admin-leaves.component.html',
  styleUrl: './admin-leaves.component.css',
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class AdminLeavesComponent implements OnInit {
  leaveRequests: LeaveRequest[] = [];
  loading = false;
  error = '';

  constructor(private leaveRequestsService: LeaveRequestsService) {}

  ngOnInit() {
    this.fetchLeaves();
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

  updateStatus(leave: LeaveRequest, newStatus: 'pending' | 'approved' | 'rejected') {
    const updated = { ...leave, status: newStatus };
    this.leaveRequestsService.update(leave.id!, updated).subscribe({
      next: () => {
        leave.status = newStatus;
      },
      error: () => {
        this.error = 'Error al actualizar el estado';
      }
    });
  }
}
