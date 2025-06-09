import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payroll } from '../../model/payroll';

@Injectable({
  providedIn: 'root'
})
export class PayrollService {
  private apiUrl = 'http://localhost:3000/payroll';

  constructor(private http: HttpClient) {}

  getPayrolls(): Observable<Payroll[]> {
    return this.http.get<Payroll[]>(this.apiUrl);
  }

  createPayroll(payroll: Payroll): Observable<Payroll> {
    return this.http.post<Payroll>(`${this.apiUrl}/alta`, payroll);
  }

  updatePayroll(id: number, payroll: Payroll): Observable<Payroll> {
    return this.http.put<Payroll>(`${this.apiUrl}/${id}`, payroll);
  }

  deletePayroll(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
