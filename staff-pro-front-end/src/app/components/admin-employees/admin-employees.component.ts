import { Department } from './../../model/department';
import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/Employees/employees.service';
import { Employee } from '../../model/employee';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DepartmentsService } from '../../services/Departments/departments.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/Auth/auth.service';

@Component({
  selector: 'app-admin-employees.component',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './admin-employees.component.html',
  styleUrls: ['./admin-employees.component.css'],
})


export class AdminEmployeesComponent implements OnInit {

  departments: Department[] = [];
  selectedDepartment: number = 0;
  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  openedEmployeeIndex: number | null = null;
  filteredDepartments: Department[] = [];
  isAdmin = false;
  isLoaded = false;


  constructor(
    private employeesService: EmployeesService,
    private departmentsService: DepartmentsService,
    private router: Router,
    private authService:AuthService
  ) {}

  toggleDetails(index: number) {
    this.openedEmployeeIndex = this.openedEmployeeIndex === index ? null : index;
  }

  ngOnInit(): void {
    this.loadDepartments();
    this.loadEmployees();

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

  loadDepartments() {
    this.departmentsService.allDepartmenst().subscribe(departments => {
      this.departments = departments;
    });
  }

  loadEmployees() {
    this.employeesService.getEmployees().subscribe(employees => {
      this.employees = employees;
      this.filterEmployees();
    });
  }

  filterEmployees() {
    if (this.selectedDepartment === 0) {
      this.filteredEmployees = this.employees;
    } else {
      this.filteredEmployees = this.employees.filter(emp =>
        emp.department_id === this.selectedDepartment
      );
    }
    this.filteredEmployees = this.filteredEmployees.map(emp => ({ ...emp, showDetails: false }));
  }

  deleteEmployee(id_user: number) {
    if (!confirm('¿Estás seguro de que deseas eliminar este empleado?')) return;
    this.employeesService.deleteById(id_user).subscribe(() => {
      this.loadEmployees();
    });
  }


  getDepartmentName(deptId: number): string {
  const dept = this.departments.find(d => d.id === deptId);
  return dept ? dept.name : 'N/D';
}

}
