import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Imports de los modelos //

import { LeaveRequest } from './leaveRequest.model';

// Imports de los controladores //

import { LeaveRequestsController } from './leaveRequests.controller';

// Imports de los servicios //

import { LeaveRequestsService } from './leaveRequests.service';
import { RolesGuard } from 'src/login/roles.guard';

// Import del EmployeesModule para la funcion de roles

import { EmployeeModule } from 'src/employee/employee.module'

// Modulo principal

@Module({
  imports: [TypeOrmModule.forFeature([LeaveRequest]),
  EmployeeModule
],
  controllers: [LeaveRequestsController],
  providers: [LeaveRequestsService, RolesGuard],
})
export class LeaveRequestsModule {}