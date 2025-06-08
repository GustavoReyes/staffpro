import { Routes } from '@angular/router';
import { PayrollComponent } from './components/payroll/payroll.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PayrollAltaComponent } from './components/payroll-alta/payroll-alta.component';

export const routes: Routes = [

  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "payroll",
    component: PayrollComponent,
  },
  {
    path: "payrollAlta",
    component: PayrollAltaComponent,
  },

  {
    path: "register",
    component: RegisterComponent
  }
];
