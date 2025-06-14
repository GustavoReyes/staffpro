import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

   private tokenKey = 'token';

  getDecodedToken(): { id_user: number; email: string } | null {
  const token = this.getToken();
  try {
    const decoded = token ? jwtDecode<{ sub: number; email: string }>(token) : null;
    return decoded ? { id_user: decoded.sub, email: decoded.email } : null;
  } catch (err) {
    console.error('Token inválido:', err);
    return null;
  }
  }
  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getUserId(): number | null {
  const decoded = this.getDecodedToken();
  return decoded ? decoded.id_user : null;
}


}


