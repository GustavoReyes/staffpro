import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './employee.model';

@Injectable()

export class EmployeeService {
  constructor(@InjectRepository(Employee)
  private readonly employeeRepository: Repository<Employee>) {
  }

  async create(employee: Employee): Promise<Employee> {
    return await this.employeeRepository.save(employee)
  }

  async findAll(): Promise<Employee[]> {
    return await this.employeeRepository.find();
  }

  async findByDepartmentId(department_id: number): Promise<Employee[]> {
    return await this.employeeRepository.findBy({ department_id });
  }

  async findByUserId(id_user: number): Promise<Employee> {
    return this.employeeRepository.findOne({
      where: { user: { id_user: id_user } },
      relations: ['user'],
    });
  }

  async update(id_user: number, updateData: Employee): Promise<Employee | null> {
    const user = await this.employeeRepository.findOneBy({ id_user });
    if (!user) {
      return null;
    }
    const updatedUser = this.employeeRepository.merge(user, updateData);
    return await this.employeeRepository.save(updatedUser);
  }

  async delete(id_user: number): Promise<boolean> {
    const result = await this.employeeRepository.delete({ id_user });
    return result.affected !== 0;
  }
}