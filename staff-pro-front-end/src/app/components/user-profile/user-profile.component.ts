import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeesService } from '../../services/Employees/employees.service';
import { Employee } from '../../model/employee';
import { AuthService } from '../../services/Auth/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})

export class UserProfileComponent implements OnInit {

  employee?: Employee;

  constructor(
    private employeesService: EmployeesService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    const idUser = this.authService.getDecodedToken();

    if (idUser) {
      this.employeesService.employeeByUserId(idUser.id_user).subscribe({
        next: (employeeData) => {
          this.employee = employeeData;
        },
        error: (error) => {
          console.error('Error loading employee data', error);
        }
      });
    } else {
      console.warn('No email found in AuthService');
    }
  }
}






