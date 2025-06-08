import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Payroll } from '../../model/payroll';
import { PayrollService } from '../../services/Payroll/payroll.service';
import { Employee } from '../../model/employee';
import { EmployeesService } from '../../services/Employees/employees.service';

@Component({
  selector: 'app-payroll-alta',
  imports: [FormsModule, CommonModule],
  templateUrl: './payroll-alta.component.html',
  styleUrl: './payroll-alta.component.css'
})
export class PayrollAltaComponent implements OnInit {
  payrolls: Payroll[] = [];
  payroll: Payroll = new Payroll(0, '');
  editing: boolean = false;
  diasPeriodo: number = 0;
  periodoInvalido: boolean = false;
  employees: Employee[] = [];

  constructor(private payrollService: PayrollService,private employeesService: EmployeesService) {}
    ngOnInit(): void {
      this.loadPayrolls();
      this.employeesService.getEmployees().subscribe(data => {
      this.employees = data;
    });
  }
  //Verificar que el perido de inicio y final del calculo de la nomina sea el correcto
  onPeriodChange() {
    const { period_in, period_out } = this.payroll;
    if (period_in && period_out) {
      const inicio = new Date(period_in);
      const fin = new Date(period_out);
      if (inicio > fin) {
        this.periodoInvalido = true;
        this.diasPeriodo = 0;
      } else {
        this.periodoInvalido = false;
        // Diferencia en milisegundos, luego a días, +1 para incluir ambos días
        const diffTime = fin.getTime() - inicio.getTime();
        this.diasPeriodo = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
      }
    } else {
      this.periodoInvalido = false;
      this.diasPeriodo = 0;
    }
  }
  onEmployeeChange() {
    const emp = this.employees.find(e => e.dni === this.payroll.user_dni);
    this.payroll.base_salary = emp ? emp.base_salary : undefined;
  }

  loadPayrolls() {
    this.payrollService.getPayrolls().subscribe(data => {
      this.payrolls = data;
    });
  }

  addPayroll() {
    this.payrollService.createPayroll(this.payroll).subscribe(() => {
      this.loadPayrolls();
      this.payroll = new Payroll(0, '');
    });
  }

  editPayroll(payroll: Payroll) {
    this.payroll = { ...payroll };
    this.editing = true;
  }

  updatePayroll() {
    this.payrollService.updatePayroll(this.payroll.id, this.payroll).subscribe(() => {
      this.loadPayrolls();
      this.payroll = new Payroll(0, '');
      this.editing = false;
    });
  }

  deletePayroll(id: number) {
    this.payrollService.deletePayroll(id).subscribe(() => {
      this.loadPayrolls();
    });
  }

  cancelEdit() {
    this.payroll = new Payroll(0, '');
    this.editing = false;
  }
  updateTotal() {
    const {
      base_salary = 0,
      social_security = 0,
      irpf = 0,
      bonus_1 = 0,
      bonus_2 = 0,
      bonus_3 = 0,
      advance = 0,
      deduction_1 = 0,
      deduction_2 = 0,
      deduction_3 = 0,
    } = this.payroll;

    // Suma de ingresos menos deducciones
    this.payroll.total =
      Number(base_salary) +
      Number(bonus_1) +
      Number(bonus_2) +
      Number(bonus_3) -
      (Number(social_security) +
        Number(irpf) +
        Number(advance) +
        Number(deduction_1) +
        Number(deduction_2) +
        Number(deduction_3));
  }
}
