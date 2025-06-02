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

@Controller('departments')
export class DepartmentsController {
  constructor(private readonly departmentsService: DepartmentsService) { }

  @Post("alta")
  create(@Body() department: Department) {
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
  async update(@Param('id') id: number, @Body() updateData: Department) {
    return await this.departmentsService.update(id, updateData);
  }

  @Delete('delete/:id')
  delete(@Param('id') id: number) {
    return this.departmentsService.delete(id);
  }
}

