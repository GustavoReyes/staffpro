import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Imports de los modelos //

import { Employee } from './employee.model';

// Imports de los controladores //

import { EmployeeController } from './employee.controller';

// Imports de los servicios //

import { EmployeeService } from './employee.service';

// Modulo principal

@Module({
  imports: [TypeOrmModule.forFeature([Employee])],
  controllers: [EmployeeController],
  providers: [EmployeeService],
  exports: [EmployeeService]
})
export class EmployeeModule { }