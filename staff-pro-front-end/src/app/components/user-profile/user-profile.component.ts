import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { EmployeesService } from '../../services/Employees/employees.service';

@Component({
  selector: 'app-user-profile',
  imports: [RouterModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  constructor(private employeesService:EmployeesService,private router:Router){

  }

   

}
