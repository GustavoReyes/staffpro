import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Payroll } from '../../model/payroll';
import { PayrollService } from '../../services/Payroll/payroll.service';
import { AuthService } from '../../services/Auth/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-payroll',
  imports:[CommonModule, FormsModule],
  templateUrl: './user-payroll.component.html',
  styleUrl: './user-payroll.component.css'
})
export class UserPayrollComponent implements OnInit {
  payrolls: Payroll[] = [];
  filteredPayrolls: Payroll[] = [];
  selectedYear: string = '';
  selectedMonth: string = '';
  availableYears: string[] = [];
  months = [
    { value: '1', label: 'Enero' },
    { value: '2', label: 'Febrero' },
    { value: '3', label: 'Marzo' },
    { value: '4', label: 'Abril' },
    { value: '5', label: 'Mayo' },
    { value: '6', label: 'Junio' },
    { value: '7', label: 'Julio' },
    { value: '8', label: 'Agosto' },
    { value: '9', label: 'Septiembre' },
    { value: '10', label: 'Octubre' },
    { value: '11', label: 'Noviembre' },
    { value: '12', label: 'Diciembre' }
  ];

  constructor(
    private payrollService: PayrollService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Verifica autenticación
    if (!this.authService.getToken()) {
      this.router.navigate(['/login']);
      return;
    }

    // Obtén el dni del usuario logeado (ajusta según tu AuthService)
    const userDni = this.authService.getUserDni?.() || localStorage.getItem('userDni');
    if (!userDni) {
      alert('No se pudo obtener el usuario actual');
      this.router.navigate(['/login']);
      return;
    }

    this.payrollService.getPayrolls().subscribe({
      next: (data) => {
        // Filtra solo los payrolls del usuario logeado
        this.payrolls = data.filter(p => p.user_dni === userDni);
        this.getAvailableYears();
        this.filterPayrolls();
      },
      error: () => {
        alert('Error al cargar nóminas');
      }
    });
  }

  getAvailableYears() {
    const years = new Set(
      this.payrolls
        .filter(payroll => payroll.date)
        .map(payroll => new Date(payroll.date!).getFullYear().toString())
    );
    this.availableYears = Array.from(years).sort((a, b) => b.localeCompare(a));
  }

  onDateFilterChange() {
    this.filterPayrolls();
  }

  filterPayrolls() {
    this.filteredPayrolls = this.payrolls;

    if (this.selectedYear) {
      this.filteredPayrolls = this.filteredPayrolls.filter(payroll => {
        const payrollYear = new Date(payroll.date!).getFullYear().toString();
        return payrollYear === this.selectedYear;
      });
    }

    if (this.selectedMonth) {
      this.filteredPayrolls = this.filteredPayrolls.filter(payroll => {
        const payrollMonth = (new Date(payroll.date!).getMonth() + 1).toString();
        return payrollMonth === this.selectedMonth;
      });
    }
  }
}
