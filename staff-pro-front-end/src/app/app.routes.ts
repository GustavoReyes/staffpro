import { AdminMenuGestionComponent } from './components/admin-menu-gestion/admin-menu-gestion.component';
import { Routes } from '@angular/router';
import { PayrollComponent } from './components/payroll/payroll.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PayrollAltaComponent } from './components/payroll-alta/payroll-alta.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserLeaveComponent } from './components/user-leave/user-leave.component';
import { PayrollListComponent } from './components/payroll-list/payroll-list.component';
import { UserPayrollComponent } from './components/user-payroll/user-payroll.component';
import { AdminMenuComponent } from './components/admin-menu/admin-menu.component';
import { AdminEmployeesComponent } from './components/admin-employees/admin-employees.component';

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
    path: "payrollLista",
    component: PayrollListComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  },
   {
    path: "userMenu",
    component: UserMenuComponent
  },
  {
    path: "userProfile",
    component: UserProfileComponent,
  },
  {
    path: "userLeave",
    component: UserLeaveComponent,
  },
  {
    path: "userPayroll",
    component: UserPayrollComponent,
  },
    {
    path: "adminMenu",
    component: AdminMenuComponent,
  },
    {
    path: "AdminMenuGestion",
    component: AdminMenuGestionComponent,
  },
    {
    path: "AdminEmployees",
    component: AdminEmployeesComponent,
  },
];
