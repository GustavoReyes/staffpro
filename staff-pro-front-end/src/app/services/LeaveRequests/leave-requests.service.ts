import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LeaveRequest } from '../../model/leaverequest';

@Injectable({
  providedIn: 'root'
})
export class LeaveRequestsService {
  private apiUrl = 'http://localhost:3000/leaveRequests';

  constructor(private http: HttpClient) {}

  getAll(): Observable<LeaveRequest[]> {
    return this.http.get<LeaveRequest[]>(this.apiUrl);
  }

  getOne(id: number): Observable<LeaveRequest> {
    return this.http.get<LeaveRequest>(`${this.apiUrl}/${id}`);
  }

  create(data: LeaveRequest): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  update(id: number, data: Partial<LeaveRequest>): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
