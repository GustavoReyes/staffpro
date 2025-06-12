import { jwtDecode } from 'jwt-decode';

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
