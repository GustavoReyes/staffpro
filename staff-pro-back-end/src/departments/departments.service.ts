import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Department } from './department.model';

@Injectable()
export class DepartmentsService {
  constructor(@InjectRepository(Department) private contactosRepository:Repository<Department>){}

  // TODO: Controller con las funcionalidades que tendra la columna de Departments

}