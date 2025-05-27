import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { LeaveRequests } from './leaveRequest.model';

@Injectable()
export class LeaveRequestService {
  constructor(@InjectRepository(LeaveRequests) private contactosRepository:Repository<LeaveRequests>){}

  // TODO: Controller con las funcionalidades que tendra la columna de LeaveRequest

  // TODO: Funcionalidades: 


}
