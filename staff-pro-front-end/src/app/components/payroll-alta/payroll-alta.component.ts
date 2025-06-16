import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Payroll } from '../../model/payroll';
import { PayrollService } from '../../services/Payroll/payroll.service';
import { Employee } from '../../model/employee';
import { EmployeesService } from '../../services/Employees/employees.service';
import { DepartmentsService } from '../../services/Departments/departments.service';
import { AuthService } from '../../services/Auth/auth.service';
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
  filteredEmployees: Employee[] = [];
  selectedEmployee: Employee | null = null;
  isAdmin = false;
  isLoaded = false;

  // Cargar desde tu servicio de departamentos
  departments: any[] = [];
  filteredDepartments: any[] = [];
  departmentSearch: string = '';
  selectedDepartment: string = '';

  constructor(private payrollService: PayrollService,
    private employeesService: EmployeesService,
    private departmentsService: DepartmentsService,
    private authService: AuthService) { }

  ngOnInit(): void {

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
  filterDepartments() {
    this.filteredDepartments = this.departments.filter(dept =>
      dept.name.toLowerCase().includes(this.departmentSearch.toLowerCase())
    );
  }
  onEmployeeChange() {
    const emp = this.filteredEmployees.find(e => e.dni === this.payroll.user_dni);
    this.selectedEmployee = emp || null;
    this.payroll.base_salary = emp ? emp.base_salary : undefined;
    this.updateTotal();
  }

  onDepartmentChange() {
    if (this.selectedDepartment) {
      // Convierte selectedDepartment a número para comparar correctamente
      const departmentId = Number(this.selectedDepartment);

      this.filteredEmployees = this.employees.filter(emp =>
        emp.department_id === departmentId
      );

      // Depuración
      console.log('Departamento ID:', departmentId);
      console.log('Todos los empleados:', this.employees);
      console.log('Empleados filtrados:', this.filteredEmployees);

      // Reset los valores relacionados con el empleado
      this.payroll.user_dni = '';
      this.selectedEmployee = null;
      this.payroll.base_salary = undefined;
    } else {
      this.filteredEmployees = [];
    }
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
      this.resetForm();
    });
  }

  editPayroll(payroll: Payroll) {
    this.payroll = { ...payroll };
    this.editing = true;
  }

  updatePayroll() {
    this.payrollService.updatePayroll(this.payroll.id!, this.payroll).subscribe(() => {
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

  resetForm() {
    this.payroll = new Payroll();
    this.selectedDepartment = '';
    this.departmentSearch = '';
    this.selectedEmployee = null;
    this.filteredEmployees = [];
    this.filterDepartments();
    this.diasPeriodo = 0;
    this.periodoInvalido = false;
  }

  cancelEdit() {
    this.payroll = new Payroll(0, '');
    this.editing = false;
  }
  updateTotal() {
    const p = this.payroll;
    // Suma de ingresos
    const ingresos =
      (p.base_salary || 0) +
      (p.bonus_1 || 0) +
      (p.bonus_2 || 0) +
      (p.bonus_3 || 0) +
      (p.advance || 0);
    // Suma de deducciones
    const deducciones =
      (p.deduction_1 || 0) +
      (p.deduction_2 || 0) +
      (p.deduction_3 || 0) +
      (p.social_security || 0) +
      (p.irpf || 0);
    p.total = ingresos - deducciones;
  }

}
