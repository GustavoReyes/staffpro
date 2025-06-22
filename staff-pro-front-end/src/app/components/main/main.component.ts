import { AuthService } from './../../services/Auth/auth.service';
import { CommonModule, NgClass } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [CommonModule, RouterOutlet, RouterLink, NgClass],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  menuOpen = false;
  userName: string | null = null;
  isLoggedIn = false;
  isAdmin = false

  constructor(private router: Router, private authService:AuthService) {}

  ngOnInit() {
    this.isLoggedIn = !!this.authService.getToken?.();
    this.userName = localStorage.getItem('userName');
    const localStorageRole = localStorage.getItem('role');
    this.isAdmin = this.isLoggedIn && localStorageRole === "ADMIN";

  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
  isDesktop = window.innerWidth >= 768;
  @HostListener('window:resize')
  onResize() {
    this.isDesktop = window.innerWidth >= 768;
  }

  logout() {
  this.authService.clearToken();
  localStorage.clear();
  this.router.navigate(['/login']).then(() => {
    window.location.reload();
  });
}

}
