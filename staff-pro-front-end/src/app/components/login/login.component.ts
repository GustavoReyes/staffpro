import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/Login/login.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({

  selector: 'app-login',
   imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  registerData = { email: '', password: '' };
  users: any[] = [];

  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.getUsers();
  }

  register() {
    this.loginService.register(this.registerData).subscribe({
      next: () => {
        this.registerData = { email: '', password: '' };
      },
      error: err => alert(err.error.message || 'Error al registrar')
    });
  }

  getUsers() {
    this.loginService.getUsers().subscribe(users => {
      this.users = users;
    });
  }
}
