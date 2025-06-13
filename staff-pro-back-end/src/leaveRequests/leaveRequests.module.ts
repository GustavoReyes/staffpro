import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Imports de los modelos //

import { LeaveRequest } from './leaveRequest.model';

// Imports de los controladores //

import { LeaveRequestsController } from './leaveRequests.controller';

// Imports de los servicios //

import { LeaveRequestsService } from './leaveRequests.service';

// Modulo principal

@Module({
  imports: [TypeOrmModule.forFeature([LeaveRequest])],
  controllers: [LeaveRequestsController],
  providers: [LeaveRequestsService],
})
export class LeaveRequestsModule {}