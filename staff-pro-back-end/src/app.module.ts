import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Imports de los modelos //

import { Departments } from './Model/Departments';
import { Employees } from './Model/Employees';
import { LeaveRequests } from './Model/LeaveRequests';
import { Payroll } from './Model/Payroll';
import { Users } from './Model/Users';

// Imports de los controladores //

import { DepartmentsController } from './Controllers/departments.controller';
import { EmployeesController } from './Controllers/employees.controller';
import { LeaveRequestController } from './Controllers/leaveRequests.controller';
import { PayrollController } from './Controllers/payroll.controller';
import { UsersController } from './Controllers/users.controller';

// Imports de los servicios //

import { DepartmentsService } from './Service/departments.service';
import { EmployeesService } from './Service/employees.service';
import { LeaveRequestService } from './Service/leaveRequests.service';
import { PayrollService } from './Service/payroll.service';
import { UsersService } from './Service/users.service';


// Modulo principal

@Module({
  imports: [TypeOrmModule.forRoot({
// Credenciales de la base de datos
type: 'mysql',
host: 'localhost',
port: 3306,
username: 'admin',
password: 'admin',
database: 'staffpro_db_data',
// Columnas de la base de datos
entities: [Departments,Employees,LeaveRequests,Payroll,Users],
synchronize: false,
// Asignacion de las columnas a controladores y servicios
  }),TypeOrmModule.forFeature([Departments,Employees,LeaveRequests,Payroll,Users])],
  controllers: [DepartmentsController,EmployeesController,LeaveRequestController,PayrollController,UsersController],
  providers: [DepartmentsService,EmployeesService,LeaveRequestService,PayrollService,UsersService],
})
export class AppModule {}