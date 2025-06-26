import { CommonModule } from '@angular/common';
import { RegisterService } from './../../services/Register/register.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerData = { email: '', password: '', confirmPassword: '' };
  users: any[] = [];

  mensajeExito: string | null = null;
  mensajeError: string | null = null;

  constructor(private registerService:RegisterService){}

 register() {
    if (this.registerData.password !== this.registerData.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    this.registerService.register(this.registerData).subscribe({
      next: () => {
        this.registerData = { email: '', password: '', confirmPassword: '' };
        this.mensajeExito = 'Usuario registrado correctamente.';
        this.mensajeError = null;
        setTimeout(() => this.mensajeExito = null, 4000);
      },
      error: err => {
        this.mensajeError = err.error.message || 'Error al registrar';
        this.mensajeExito = null;
        setTimeout(() => this.mensajeError = null, 4000);
      }
    });
  }
}
