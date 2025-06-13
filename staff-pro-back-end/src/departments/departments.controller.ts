import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';

import { DepartmentsService } from './departments.service';
import { Department } from './department.model';
import { DepartmentDto } from './dtos/DepartmentDto';
import { RolesGuard } from 'src/login/roles.guard';
import { LoginGuard } from 'src/login/login.guard';
import { Roles } from 'src/login/roles.decorator';

@UseGuards(LoginGuard, RolesGuard)
@Controller('departments')
export class DepartmentsController {
  constructor(private readonly departmentsService: DepartmentsService) { }

@Roles('admin')
  @Post("alta")
  create(@Body() department: DepartmentDto) {
    this.departmentsService.create(department);
  }

  @Roles('admin')
  @Get("allDepartments")
  findAll() {
    return this.departmentsService.findAll();
  }

  @Roles('admin')
  @Get('department/:id')
  findById(@Param('id') id: number) {
    return this.departmentsService.findById(id);
  }

  @Roles('admin')
  @Patch('actualizar/:id')
  async update(@Param('id') id: number, @Body() updateData: DepartmentDto) {
    return await this.departmentsService.update(id, updateData);
  }

  @Roles('admin')
  @Delete('delete/:id')
  delete(@Param('id') id: number) {
    return this.departmentsService.delete(id);
  }
  
}

