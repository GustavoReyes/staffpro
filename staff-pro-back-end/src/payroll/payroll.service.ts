import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Payroll } from './payroll.model';

@Injectable()
export class PayrollService {
  constructor(@InjectRepository(Payroll) private contactosRepository:Repository<Payroll>){}

  // TODO: Controller con las funcionalidades que tendra la columna de Payroll


}
