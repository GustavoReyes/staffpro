import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Imports de los modelos //

import { LeaveRequests } from './leaveRequest.model';

// Imports de los controladores //

import { LeaveRequestController } from './leaveRequests.controller';

// Imports de los servicios //

import { LeaveRequestService } from './leaveRequests.service';

// Modulo principal

@Module({
  imports: [TypeOrmModule.forFeature([LeaveRequests])],
  controllers: [LeaveRequestController],
  providers: [LeaveRequestService],
})
export class LeaveRequestsModule {}