import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateDepartmentsDto } from './dto/create-departments.dto';
import { UpdateDepartmentsDto } from './dto/update-departments.dto';
import { DepartmentsService } from './departments.service';

@Controller('departmentss')
export class DepartmentsController {
  constructor(private readonly departmentsService: DepartmentsService) {}

  @Post()
  create(@Body() createDepartmentsDto: CreateDepartmentsDto) {
    return this.departmentsService.create(createDepartmentsDto);
  }

  @Get()
  findAll() {
    return this.departmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.departmentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDepartmentsDto: UpdateDepartmentsDto) {
    return this.departmentsService.update(+id, updateDepartmentsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.departmentsService.remove(+id);
  }
}
