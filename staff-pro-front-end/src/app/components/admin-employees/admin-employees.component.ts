import { Department } from './../../model/department';
import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/Employees/employees.service';
import { Employee } from '../../model/employee';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DepartmentsService } from '../../services/Departments/departments.service';
import { Router } from '@angular/router';

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

  constructor(
    private employeesService: EmployeesService,
    private departmentsService: DepartmentsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadDepartments();
    this.loadEmployees();
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
  }

  deleteEmployee(id_user: number) {
    if (!confirm('¿Estás seguro de que deseas eliminar este empleado?')) return;
    this.employeesService.deleteById(id_user).subscribe(() => {
      this.loadEmployees();
    });
  }

  goToEdit(id_user: number) {
    this.router.navigate(['/edit-employee', id_user]);
  }
  getDepartmentName(deptId: number): string {
  const dept = this.departments.find(d => d.id === deptId);
  return dept ? dept.name : 'N/D';
}

}
