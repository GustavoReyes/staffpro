import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payroll } from '../../model/payroll';
import { AuthService } from '../Auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PayrollService {
  private apiUrl = 'http://localhost:3000/payroll';

  constructor(private http: HttpClient, private authService: AuthService) {}

  private getAuthHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  }

  getPayrolls(): Observable<Payroll[]> {
    return this.http.get<Payroll[]>(this.apiUrl, { headers: this.getAuthHeaders() });
  }

  createPayroll(payroll: Payroll): Observable<Payroll> {
    return this.http.post<Payroll>(`${this.apiUrl}/alta`, payroll, { headers: this.getAuthHeaders() });
  }

  updatePayroll(id: number, payroll: Payroll): Observable<Payroll> {
    return this.http.put<Payroll>(`${this.apiUrl}/${id}`, payroll, { headers: this.getAuthHeaders() });
  }

  deletePayroll(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers: this.getAuthHeaders() });
  }
}
