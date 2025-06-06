import { Component } from '@angular/core';
import { LoginService } from '../../services/Login/login.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({

  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginData = { email: '', password: '' };
  users: any[] = [];

  constructor(private loginService: LoginService) { }

  login() {
    this.loginService.login(this.loginData).subscribe({
      next: () => {
        this.loginData;
      },
      error: err => alert(err.error.message || 'Error al Login')
    });
  }
}
