import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Payroll } from './payroll.model';

@Injectable()
export class PayrollService {
  constructor(@InjectRepository(Payroll) private payrollRepository: Repository<Payroll>) {}

  // TODO: Controller con las funcionalidades que tendra la columna de Payroll
create(payroll: Payroll): Promise<Payroll> {
    return this.payrollRepository.save(payroll);
  }

  findAll(): Promise<Payroll[]> {
    return this.payrollRepository.find();
  }

  findOne(id: number): Promise<Payroll> {
    return this.payrollRepository.findOneBy({ id });
  }

  async update(id: number, payroll: Payroll): Promise<Payroll> {
    await this.payrollRepository.update(id, payroll);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.payrollRepository.delete(id);
  }

}
