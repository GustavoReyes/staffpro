import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { Employee } from '../../model/employee';

@Injectable({ providedIn: 'root' })
export class EmployeesService {
  private apiUrl = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) { }

  registerEmployee(email: string, datos: any): Observable<boolean> {

    const url: string = `${this.apiUrl}/alta/${email}`;
    return this.http.post<boolean>(url, datos)
      .pipe(map(() => true),
        catchError(e => of(false)));
  }

  getEmployees(): Observable<Employee[]> {
    const url: string = `${this.apiUrl}/findAll`;
    return this.http.get<Employee[]>(url);
  }

  employeeByUserId(id_user: number): Observable<any> {
    const url: string = `${this.apiUrl}/findByUser/${id_user}`;
    return this.http.get<Employee>(url);
  }


  employeesByDepartment(department_id: number): Observable<Employee[]> {
    const url: string = `${this.apiUrl}findByDepart/${department_id}`;
    return this.http.get<Employee[]>(url);
  }
  employeeByEmail(email: string): Observable<Employee> {
    const url: string = `${this.apiUrl}/findByEmail/${email}`;
    return this.http.get<Employee>(url);
  }

  updateByEmail(email: string, datos: any): Observable<any> {
    return this.http.patch(`/apiUrl/patch/${email}`, datos);
  }
  deleteByEmail(email: string): Observable<any> {
    return this.http.delete(`/apiUrl/delete/${email}`);
  }
}
