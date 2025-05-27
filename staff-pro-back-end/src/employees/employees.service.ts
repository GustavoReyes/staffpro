import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Employee } from './employee.model';

@Injectable()
export class EmployeesService {
  constructor(@InjectRepository(Employee) private contactosRepository:Repository<Employee>){}

  // TODO: Controller con las funcionalidades que tendra la columna de Employees

}