import { AuthService } from './../Auth/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../../model/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  constructor(private http: HttpClient, private authService: AuthService) { }
  private apiUrl = 'http://localhost:3000/departments/';

  private getAuthHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  }

  allDepartmenst(): Observable<Department[]> {
    return this.http.get<Department[]>(this.apiUrl+ 'allDepartments', { headers: this.getAuthHeaders() });
  }

  createDeparment(department: Department): Observable<Department> {
    return this.http.post<Department>(this.apiUrl, department, { headers: this.getAuthHeaders() });
  }

  updateDepartment(id: number, department: Department): Observable<Department> {
    return this.http.put<Department>(`${this.apiUrl}/${id}`, department, { headers: this.getAuthHeaders() });
  }

}
