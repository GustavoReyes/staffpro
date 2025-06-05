import { Routes } from '@angular/router';
import { PayrollComponent } from './components/payroll/payroll.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [

  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "payroll",
    component: PayrollComponent,
  }
];
