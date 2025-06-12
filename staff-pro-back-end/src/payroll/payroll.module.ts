import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Imports de los modelos //

import { Payroll } from './payroll.model';
import { PayrollDto } from './Dtos/PayrollDto';

// Imports de los controladores //

import { PayrollController } from './payroll.controller';

// Imports de los servicios //

import { PayrollService } from './payroll.service';
import { Employee } from 'src/employee/employee.model';
import { EmployeeModule } from 'src/employee/employee.module';

// Modulo principal

@Module({
  imports: [TypeOrmModule.forFeature([Payroll, Employee]),
EmployeeModule],
  controllers: [PayrollController],
  providers: [PayrollService],
})
export class PayrollModule {}