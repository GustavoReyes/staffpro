import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Departments } from './departments.entity';

@Injectable()
export class DepartmentsService {
  constructor(@InjectRepository(Departments) private contactosRepository:Repository<Departments>){}

  // TODO: Controller con las funcionalidades que tendra la columna de Departments

}