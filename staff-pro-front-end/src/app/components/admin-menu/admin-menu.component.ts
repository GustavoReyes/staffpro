import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeesService } from '../../services/Employees/employees.service';
import { AuthService } from '../../services/Auth/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-menu',
  imports: [RouterModule, CommonModule],
  templateUrl: './admin-menu.component.html',
  styleUrl: './admin-menu.component.css'
})
export class AdminMenuComponent implements OnInit {
  isAdmin = false;
  isLoaded = false;

  constructor(
    private employeesService: EmployeesService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const userId = this.authService.getUserId?.();
    if (!userId) {
      this.isLoaded = true;
      this.isAdmin = false;
      return;
    }

    this.employeesService.getEmployees().subscribe({
      next: (employees) => {
        const employee = employees.find(emp => emp.id_user === userId);
        this.isAdmin = !!employee && Number(employee.department_id) === 1;
        this.isLoaded = true;
      },
      error: () => {
        this.isLoaded = true;
        this.isAdmin = false;
      }
    });
  }
}
