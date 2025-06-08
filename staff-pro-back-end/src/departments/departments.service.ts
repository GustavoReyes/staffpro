import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Department } from './department.model';
import { DepartmentDto } from './dtos/DepartmentDto';

@Injectable()
export class DepartmentsService {
  constructor(@InjectRepository(Department) private departmentRepository: Repository<Department>) { }

  async findAll(): Promise<DepartmentDto[]> {
    return await this.departmentRepository.find();
  }
  async findById(id: number): Promise<DepartmentDto> {
    return this.departmentRepository.findOneBy({ id });
  }

  create(department: DepartmentDto): void {
    this.departmentRepository.save(department);
  }

  update(id: number, department: DepartmentDto): void {
    this.departmentRepository.update(id, department);
  }

  delete(id: number): void {
    this.departmentRepository.delete(id);
  }

}