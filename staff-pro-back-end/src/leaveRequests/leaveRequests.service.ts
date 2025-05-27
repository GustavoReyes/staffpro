import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { LeaveRequest } from './leaveRequest.model';

@Injectable()
export class LeaveRequestService {
  constructor(@InjectRepository(LeaveRequest) private contactosRepository:Repository<LeaveRequest>){}

  // TODO: Controller con las funcionalidades que tendra la columna de LeaveRequest

  // TODO: Funcionalidades: 


}
