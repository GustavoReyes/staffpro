import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LeaveRequest } from '../../model/leaverequest';

@Injectable({
  providedIn: 'root'
})
export class LeaveRequestsService {
  private apiUrl = 'http://localhost:3000/leaveRequests';

  constructor(private http: HttpClient) {}

  private AuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token'); // O donde guardes tu token
    return new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  }

  getAll(): Observable<LeaveRequest[]> {
    return this.http.get<LeaveRequest[]>(this.apiUrl, { headers: this.AuthHeaders() });
  }

  getOne(id: number): Observable<LeaveRequest> {
    return this.http.get<LeaveRequest>(`${this.apiUrl}/${id}`, { headers: this.AuthHeaders() });
  }

  create(data: LeaveRequest): Observable<any> {
    return this.http.post(this.apiUrl, data, { headers: this.AuthHeaders() });
  }

  update(id: number, data: Partial<LeaveRequest>): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data, { headers: this.AuthHeaders() });
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, { headers: this.AuthHeaders() });
  }
}
