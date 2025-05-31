import { Component, OnInit } from '@angular/core';
import { PayrollService } from '../../services/Payroll/payroll.service';
import { Payroll } from '../../model/payroll';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-payroll',
  imports: [CommonModule, FormsModule, RouterOutlet],
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
}
