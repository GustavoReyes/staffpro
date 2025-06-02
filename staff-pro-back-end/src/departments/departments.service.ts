import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Department } from './department.model';

@Injectable()
export class DepartmentsService {
  constructor(@InjectRepository(Department) private departmentRepository: Repository<Department>) { }

  async findAll(): Promise<Department[]> {
    return await this.departmentRepository.find();
  }
  async findById(id: number): Promise<Department> {
    return this.departmentRepository.findOneBy({ id });
  }

  create(department: Department): void {
    this.departmentRepository.save(department);
  }

  update(id: number, department: Department): void {
    this.departmentRepository.update(id, department);
  }

  delete(id: number): void {
    this.departmentRepository.delete(id);
  }

}