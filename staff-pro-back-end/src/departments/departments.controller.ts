import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { DepartmentsService } from './departments.service';
import { Department } from './department.model';
import { DepartmentDto } from './dtos/DepartmentDto';

@Controller('departments')
export class DepartmentsController {
  constructor(private readonly departmentsService: DepartmentsService) { }

  @Post("alta")
  create(@Body() department: DepartmentDto) {
    this.departmentsService.create(department);
  }

  @Get("allDepartments")
  findAll() {
    return this.departmentsService.findAll();
  }

  @Get('department/:id')
  findById(@Param('id') id: number) {
    return this.departmentsService.findById(id);
  }

  @Patch('actualizar/:id')
  async update(@Param('id') id: number, @Body() updateData: DepartmentDto) {
    return await this.departmentsService.update(id, updateData);
  }

  @Delete('delete/:id')
  delete(@Param('id') id: number) {
    return this.departmentsService.delete(id);
  }
}

