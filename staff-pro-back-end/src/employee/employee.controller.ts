import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.model';

@Controller('employees')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) { }

  
  @Post("alta")
  async create(@Body() employee: Employee, @Res() response: Response) {
    const result = await this.employeeService.create(employee);
    if (result) {
      response.status(200).send();
    } else {
      response.status(409).send();
    }
  }

  @Get("findAll")
  findAll(): Promise<Employee[]> {
    return this.employeeService.findAll();
  }

  @Get("findByUser/:id_user")
  async findByUser(@Param('id_user') id_user: number){
    return await this.employeeService.findByUserId(id_user);
  }

  @Get("findByDepart/:department_id")
  async findByDepart(@Param('department_id') department_id: number) {
    return await this.employeeService.findByDepartmentId(department_id);
  }

  @Patch('patch/:id_user')
  async update(@Param('id_user') id_user: number, @Body() updateData: Employee){
    return await this.employeeService.update(id_user, updateData);
  } 

  @Delete('delete/:id_user')
  async delete(@Param('id_user') id_user: number) {
    return await this.employeeService.delete(id_user);
  } 
}