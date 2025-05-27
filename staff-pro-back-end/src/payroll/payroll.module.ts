import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Imports de los modelos //

import { Payroll } from './payroll.model';

// Imports de los controladores //

import { PayrollController } from './payroll.controller';

// Imports de los servicios //

import { PayrollService } from './payroll.service';

// Modulo principal

@Module({
  imports: [TypeOrmModule.forFeature([Payroll])],
  controllers: [PayrollController],
  providers: [PayrollService],
})
export class PayrollModule {}