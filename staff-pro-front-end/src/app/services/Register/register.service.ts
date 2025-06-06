import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
 private apiUrl = 'http://localhost:3000/'
  constructor(private http: HttpClient) { }

  register(data: { email: string; password: string }): Observable<any> {
    return this.http.post(this.apiUrl + 'login/register/', data);
  }
}
