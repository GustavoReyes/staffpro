import { Injectable } from '@nestjs/common';
import { CreateDepartmentsDto } from './dto/create-departments.dto';
import { UpdateDepartmentsDto } from './dto/update-departments.dto';

@Injectable()
export class DepartmentsService {
  create(createDepartmentsDto: CreateDepartmentsDto) {
    return 'This action adds a new departments';
  }

  findAll() {
    return `This action returns all departmentss`;
  }

  findOne(id: number) {
    return `This action returns a #id departments`;
  }

  update(id: number, updateDepartmentsDto: UpdateDepartmentsDto) {
    return `This action updates a #id departments`;
  }

  remove(id: number) {
    return `This action removes a #id departments`;
  }
}
