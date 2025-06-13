import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Imports de los modelos //

import { Employee } from './employee.model';
import { User } from 'src/users/user.model';
import { Department } from 'src/departments/department.model';
import { Payroll } from 'src/payroll/payroll.model';
import { LeaveRequest } from 'src/leaveRequests/leaveRequest.model';

// Imports de los controladores //

import { EmployeeController } from './employee.controller';

// Imports de los servicios //

import { EmployeeService } from './employee.service';

// Modulo principal

@Module({
  imports: [TypeOrmModule.forFeature([User, Employee, Department, Payroll, LeaveRequest])],
  controllers: [EmployeeController],
  providers: [EmployeeService],
  exports: [EmployeeService]
})
export class EmployeeModule { }