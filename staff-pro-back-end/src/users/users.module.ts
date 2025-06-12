import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.model';

import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Employee } from 'src/employee/employee.model';
import { Payroll } from 'src/payroll/payroll.model';
import { Department } from 'src/departments/department.model';
import { LeaveRequest } from 'src/leaveRequests/leaveRequest.model';
import { EmployeeModule } from 'src/employee/employee.module';

@Module({
  imports: [TypeOrmModule.forFeature([User, Employee, Department, Payroll, LeaveRequest]),
  EmployeeModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]

})
export class UsersModule { }
