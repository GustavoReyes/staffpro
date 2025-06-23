import { Routes } from '@angular/router';
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
import { AdminPayrollsComponent } from './components/admin-payrolls/admin-payrolls.component';
import { AdminLeavesComponent } from './components/admin-leaves/admin-leaves.component';
import { AdminMenuGestionComponent } from './components/admin-menu-gestion/admin-menu-gestion.component';
import { PayrollMenuComponent } from './components/payroll-menu/payroll-menu.component';
import { AdminEmployeesEditComponent } from './components/admin-employees-edit/admin-employees-edit.component';
import { AdminEmployeeRegisterComponent } from './components/admin-employee-register/admin-employee-register.component';
import { AdminPayrollEditComponent } from './components/admin-payroll-edit/admin-payroll-edit/admin-payroll-edit.component';

export const routes: Routes = [

  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "payrollMenu",
    component: PayrollMenuComponent,
  },
  {
    path: "payrollAlta",
    component: PayrollAltaComponent,
  },
  {
    path: "payrollList",
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
    path: "adminMenuGestion",
    component: AdminMenuGestionComponent,
  },
  {
    path: "adminEmployees",
    component: AdminEmployeesComponent,
  },
  {
    path: "adminLeaves",
    component: AdminLeavesComponent,
  },
  {
    path: "adminPayrolls",
    component: AdminPayrollsComponent,
  },
  {
    path: "adminPayrollsEdit",
    component: AdminPayrollEditComponent,
  },
  {
    path: "adminEmployeesEdit/:id_user",
    component: AdminEmployeesEditComponent,
  },
  {
    path: "adminEmployeeRegister",
    component: AdminEmployeeRegisterComponent,
  },
];
