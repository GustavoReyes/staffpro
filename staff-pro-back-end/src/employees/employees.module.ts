import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Imports de los modelos //

import { Employees } from './employee.model';

// Imports de los controladores //

import { EmployeesController } from './employees.controller';

// Imports de los servicios //

import { EmployeesService } from './employees.service';

// Modulo principal

@Module({
  imports: [TypeOrmModule.forFeature([Employees])],
  controllers: [EmployeesController],
  providers: [EmployeesService],
})
export class EmployeesModule {}