import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Employees } from 'src/employees/employees.entity';

@Injectable()
export class EmployeesService {
  constructor(@InjectRepository(Employees) private contactosRepository:Repository<Employees>){}

  // TODO: Controller con las funcionalidades que tendra la columna de Employees

}