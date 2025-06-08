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
import { EmployeeAltaDto } from './dtos/employeeAltaDto';
import { EmployeeDatosDto } from './dtos/employeeDatos.dto';

@Controller('employees')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) { }


  @Post("alta/:email")
  async create(@Param('email') email: string, @Body() employee: EmployeeAltaDto, @Res() response: Response) {
    const result = await this.employeeService.create( employee, email);
    if (result) {
      response.status(200).send('Empleado agregado correctamente');
    } else {
      response.status(409).send('Hubo un error al agragar el empleado');
    }
  }

  @Get("findAll")
  findAll()  {
    return this.employeeService.findAll();
  }

  @Get("findByUser/:id_user")
  async findByUser(@Param('id_user') id_user: number) {
    return await this.employeeService.findByUserId(id_user);
  }
  @Get("findByEmail/:email")
  async findByEmail(@Param('email') email: string) {  
    return await this.employeeService.findByEmail(email);
  }

  @Get("findByDepart/:department_id")
  async findByDepart(@Param('department_id') department_id: number) {
    return await this.employeeService.findByDepartmentId(department_id);
  }

  @Patch('patch/:email')
async updateByEmail(
  @Param('email') email: string,
  @Body() updateData: Partial<EmployeeAltaDto>
): Promise<EmployeeDatosDto> {
  return await this.employeeService.updateByEmail(email, updateData);
}

@Delete('delete/:email')
async deleteByEmail(@Param('email') email: string): Promise<{ deleted: boolean }> {
  const success = await this.employeeService.deleteByEmail(email);
  return { deleted: success };
}
}