import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getDecodedToken(): { id_user: number, email: string } | null {
    const token = localStorage.getItem('token');
    return token ? jwtDecode(token) as any : null;
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
