import { AuthService } from './../Auth/auth.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { Employee } from '../../model/employee';

@Injectable({ providedIn: 'root' })
export class EmployeesService {
  private apiUrl = 'http://localhost:3000/employees';

  constructor(private http: HttpClient, private authservice:AuthService) {

  }
 private getAuthHeaders(): HttpHeaders {
    const token = this.authservice.getToken();
    let headers = new HttpHeaders();

    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  }

  getEmployeeByEmail(email: string): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrl}/findByEmail/${email}`, {
      headers: this.getAuthHeaders()
    });
  }


  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}/findAll`, {
      headers: this.getAuthHeaders()
    });
  }

  getEmployeesByDepartment(departmentId: number): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}/findByDepart/${departmentId}`, {
      headers: this.getAuthHeaders()
    });
  }
  registerEmployee(email: string, datos: any): Observable<boolean> {
    const url: string = `${this.apiUrl}/alta/${email}`;
    return this.http.post<boolean>(url, datos, { headers: this.getAuthHeaders() })
      .pipe(map(() => true),
        catchError(e => of(false)));
  }

  updateEmployeeByEmail(email: string, datos: any): Observable<any> {
    const url: string = `${this.apiUrl}/patch/${email}`;
    return this.http.patch(url, datos, { headers: this.getAuthHeaders() });
  }

  employeeByUserId(id_user: number): Observable<any> {
    if (!id_user) {
      return of(null);
    } else {
      const url: string = `${this.apiUrl}/findByUser/${id_user}`;
      return this.http.get<Employee>(url, { headers: this.getAuthHeaders() });
    }
  }

  employeeByEmail(email:string): Observable<any> {
        const url: string = `${this.apiUrl}/findByEmail/${email}`;
    return this.http.get<Employee>(url, { headers: this.getAuthHeaders() });
  }
deleteByEmail(email: string): Observable<any> {
  const url: string = `${this.apiUrl}/delete/${email}`;
  return this.http.delete(url, { headers: this.getAuthHeaders() });
}

}
