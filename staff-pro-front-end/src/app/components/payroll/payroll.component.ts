import { Component, OnInit } from '@angular/core';
import { PayrollService } from '../../services/Payroll/payroll.service';
import { Payroll } from '../../model/payroll';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payroll',
  imports: [CommonModule, FormsModule,],
  templateUrl: './payroll.component.html',
  styleUrl: './payroll.component.css'
})
export class PayrollComponent implements OnInit {
  payrolls: Payroll[] = [];
  payroll: Payroll = new Payroll(0, '');
  editing: boolean = false;

  constructor(private payrollService: PayrollService) { }

  ngOnInit(): void {
    this.loadPayrolls();
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
    bonus_1 = 0,
    bonus_2 = 0,
    bonus_3 = 0,
    social_security = 0,
    irpf = 0,
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
