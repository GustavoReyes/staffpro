import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payroll } from './payroll.model';
import { PayrollController } from './payroll.controller';
import { PayrollService } from './payroll.service';
import { Employee } from 'src/employee/employee.model';
import { EmployeeModule } from 'src/employee/employee.module';

@Module({
  imports: [TypeOrmModule.forFeature([Payroll, Employee]),
EmployeeModule],
  controllers: [PayrollController],
  providers: [PayrollService],
})
export class PayrollModule {}