import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-payroll-menu',
  imports: [CommonModule, FormsModule, RouterLink, RouterOutlet],
  templateUrl: './payroll-menu.component.html',
  styleUrl: './payroll-menu.component.css'
})
export class PayrollMenuComponent {

}
