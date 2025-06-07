import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Payroll } from './payroll.model';
import { PayrollDto } from './Dtos/PayrollDto';
import { Employee } from 'src/employee/employee.model';

@Injectable()
export class PayrollService {
  constructor(@InjectRepository(Payroll) private payrollRepository: Repository<Payroll>,
    @InjectRepository(Employee) private employeeRepository: Repository<Employee>) { }

  // TODO: Controller con las funcionalidades que tendra la columna de Payroll
  async create(PayrollDto: PayrollDto): Promise<Payroll> {
    // Si necesitas buscar el empleado y asignar el objeto completo:
    const employee = await this.employeeRepository.findOne({ where: { dni: PayrollDto.user_dni } });
    const payroll = this.payrollRepository.create({ ...PayrollDto, employee });
    return this.payrollRepository.save(payroll);
  }

  findAll(): Promise<Payroll[]> {
    return this.payrollRepository.find({
      relations: ['employee']
    });
  }

  findOne(id: number): Promise<Payroll> {
    return this.payrollRepository.findOne({
      where: { id },
      relations: ['employee']
    });
  }

  async update(id: number, payroll: Payroll): Promise<Payroll> {
    await this.payrollRepository.update(id, payroll);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.payrollRepository.delete(id);
  }

}
