import { Component, OnInit } from '@angular/core';
import { Department } from '../../../model/department';
import { Employee } from '../../../model/employee';
import { Payroll } from '../../../model/payroll';
import { DepartmentsService } from '../../../services/Departments/departments.service';
import { EmployeesService } from '../../../services/Employees/employees.service';
import { PayrollService } from '../../../services/Payroll/payroll.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/Auth/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  imports: [CommonModule, FormsModule,RouterLink],
  selector: 'app-payroll-edit',
  templateUrl: './admin-payroll-edit.component.html',
  styleUrls: ['./admin-payroll-edit.component.css']
})
export class AdminPayrollEditComponent implements OnInit {
  departments: Department[] = [];
  employees: Employee[] = [];
  isLoaded = false;
  isAdmin = false;
  filteredEmployees: Employee[] = [];
  payrolls: Payroll[] = [];
  filteredPayrolls: Payroll[] = [];
  filteredDepartments: any[] = [];
  selectedDepartment: string = '';
  selectedEmployee: string = '';

  selectedPayroll: Payroll | null = null;

  constructor(
    private payrollService: PayrollService,
    private employeesService: EmployeesService,
    private departmentsService: DepartmentsService,
    private authService: AuthService
  ) { }

  ngOnInit() {

    const userId = this.authService.getUserId();
    if (!userId) {
      this.isLoaded = true;
      this.isAdmin = false;
      return;
    }

    this.employeesService.getEmployees().subscribe({
      next: (employees) => {
        const employee = employees.find(emp => emp.id_user === userId);
        this.isAdmin = !!employee && employee.department_id === 1;
        this.isLoaded = true;

        if (this.isAdmin) {
          this.departmentsService.allDepartmenst().subscribe({
            next: (data) => {
              this.departments = data;
              this.filteredDepartments = data;
            },
            error: (error) => console.error('Error cargando departamentos:', error)
          });

          this.employees = employees.map(emp => {
            emp.department_id = Number(emp.department_id);
            return emp;
          });
        }
      },
      error: (error) => {
        this.isLoaded = true;
        this.isAdmin = false;
        console.error('Error cargando empleados:', error);
      }
    });

    this.departmentsService.allDepartmenst().subscribe(depts => {
      this.departments = depts;
    });

    this.employeesService.getEmployees().subscribe(emps => {
      this.employees = emps;
    });

    this.payrollService.getPayrolls().subscribe(payrolls => {
      this.payrolls = payrolls;
    });
  }


  onDepartmentChange() {
    this.selectedEmployee = '';
    this.filteredEmployees = this.selectedDepartment
      ? this.employees.filter(e => e.department_id == +this.selectedDepartment)
      : [];
    this.filteredPayrolls = [];
  }

  onEmployeeChange() {
    if (this.selectedEmployee) {
      this.filteredPayrolls = this.payrolls.filter(
        p => p.user_dni == this.selectedEmployee
      );
    } else {
      this.filteredPayrolls = [];
    }
  }

  getDepartmentName(deptId: number): string {
    const dept = this.departments.find(d => d.id == deptId);
    return dept ? dept.name : '';
  }

  getEmployeeName(dni: string): string {
    const emp = this.employees.find(e => e.dni == dni);
    return emp ? emp.name : '';
  }

  selectPayroll(payroll: Payroll) {
    this.selectedPayroll = { ...payroll };
  }

  cancelEdit() {
    this.selectedPayroll = null;
  }

  updatePayroll() {
    if (!this.selectedPayroll || this.selectedPayroll.id === undefined) return;
    this.payrollService.updatePayroll(this.selectedPayroll.id, this.selectedPayroll).subscribe({
      next: (updated: any) => {
        const idx = this.payrolls.findIndex(p => p.id === updated.id);
        if (idx > -1) this.payrolls[idx] = updated;
        this.onEmployeeChange();
        this.selectedPayroll = null;
      },
      error: () => {
        alert('Error al actualizar la nómina');
      }
    });
  }
}
