import { CommonModule } from '@angular/common';
import { RegisterService } from './../../services/Register/register.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

 registerData = { email: '', password: '', confirmPassword: '' };
users: any[] = [];

  constructor(private registerService:RegisterService){}

 register() {
    if (this.registerData.password !== this.registerData.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    this.registerService.register(this.registerData).subscribe({
      next: () => {
        this.registerData = { email: '', password: '', confirmPassword: '' };
      },
      error: err => alert(err.error.message || 'Error al registrar')
    });
  }
}
