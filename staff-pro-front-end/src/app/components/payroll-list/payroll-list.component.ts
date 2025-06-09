import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Payroll } from '../../model/payroll';
import { PayrollService } from '../../services/Payroll/payroll.service';
import { Employee } from '../../model/employee';
import { EmployeesService } from '../../services/Employees/employees.service';
import { DepartmentsService } from '../../services/Departments/departments.service';

@Component({
  selector: 'app-payroll-list',
  imports: [FormsModule, CommonModule],
  templateUrl: './payroll-list.component.html',
  styleUrl: './payroll-list.component.css'
})
export class PayrollListComponent implements OnInit {
  payrolls: Payroll[] = [];
  filteredPayrolls: Payroll[] = [];
  departments: any[] = [];
  employees: Employee[] = [];
  selectedDepartment: string = '';
  selectedDni: string = '';
  filteredEmployees: Employee[] = [];
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
    private employeesService: EmployeesService,
    private departmentsService: DepartmentsService
  ) { }

  ngOnInit(): void {
    // Cargar departamentos
    this.departmentsService.allDepartmenst().subscribe({
      next: (data) => {
        this.departments = data;
      },
      error: (error) => console.error('Error cargando departamentos:', error)
    });

    // Cargar empleados
    this.employeesService.getEmployees().subscribe({
      next: (data) => {
        this.employees = data.map(emp => {
          emp.department_id = Number(emp.department_id);
          return emp;
        });
      },
      error: (error) => console.error('Error cargando empleados:', error)
    });

    // Cargar todas las nóminas
    this.loadPayrolls();
  }

  loadPayrolls() {
    this.payrollService.getPayrolls().subscribe({
      next: (data) => {
        this.payrolls = data;
        this.getAvailableYears(); // Añade esta línea
        this.filterPayrolls();
      },
      error: (error) => console.error('Error cargando nóminas:', error)
    });
  }
  getAvailableYears() {
    const years = new Set(
      this.payrolls
        .filter(payroll => payroll.date) // Asegúrate de que date existe
        .map(payroll => new Date(payroll.date!).getFullYear().toString())
    );
    this.availableYears = Array.from(years).sort((a, b) => b.localeCompare(a));
  }

  onDateFilterChange() {
    this.filterPayrolls();
  }

  onDepartmentChange() {
    if (this.selectedDepartment) {
      const departmentId = Number(this.selectedDepartment);
      this.filteredEmployees = this.employees.filter(emp =>
        emp.department_id === departmentId
      );
      this.selectedDni = '';
    } else {
      this.filteredEmployees = [];
    }
    this.filterPayrolls();
  }

  onEmployeeChange() {
    this.filterPayrolls();
  }

  filterPayrolls() {
    this.filteredPayrolls = this.payrolls;

    // Mantén los filtros existentes
    if (this.selectedDepartment) {
      const departmentId = Number(this.selectedDepartment);
      this.filteredPayrolls = this.filteredPayrolls.filter(payroll => {
        const employee = this.employees.find(emp => emp.dni === payroll.user_dni);
        return employee?.department_id === departmentId;
      });
    }

    if (this.selectedDni) {
      this.filteredPayrolls = this.filteredPayrolls.filter(payroll =>
        payroll.user_dni === this.selectedDni
      );
    }

    // Añade los nuevos filtros de fecha
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

  getEmployeeName(dni: string): string {
    return this.employees.find(emp => emp.dni === dni)?.name || dni;
  }
}
