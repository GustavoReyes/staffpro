import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeesService } from '../../services/Employees/employees.service';
import { LoginService } from '../../services/Login/login.service';
import { AuthService } from '../../services/Auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // corregido: era "styleUrl"
})
export class LoginComponent {
  loginData = { email: '', password: '' };

  constructor(
    private loginService: LoginService,
    private authService: AuthService,
    private employeesService: EmployeesService,
    private router: Router
  ) {}

  login() {
    this.loginService.login(this.loginData).subscribe({
      next: (res) => {
        const token = res.access_token;

        if (!token) {
          alert("Token no recibido");
          return;
        }

        this.authService.saveToken(token);

        const decoded = this.authService.getDecodedToken();
        if (!decoded) {
          alert("Token inválido");
          return;
        }

        const id_user = decoded.id_user;

        this.employeesService.employeeByUserId(id_user).subscribe({
          next: (employee) => {
            const department_id = employee.department_id;

            if (department_id === 1) {
              this.router.navigate(['/adminMenu']);
            } else {
              this.router.navigate(['/userMenu']);
            }
          },
          error: () => {
            alert("No se pudo obtener el empleado");
          }
        });
      },
      error: err => {
        alert(err.error?.message || 'Credenciales inválidas');
      }
    });
  }
}
