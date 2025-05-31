import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';

import { EmployeeService } from './employee.service';
import { Employee } from './employee.model';

@Controller('employess')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) { }

  /**
   *llama al metodo para crear un nuevo usuario, 
   *
   * @param {Employee} employee
   * @param {Response} response si lo crea devuelve 200, si algo va mal lanza un 409
   * @return {*}  {Promise<void>}
   * @memberof EmployeeController
   */
  @Post("alta")
  async create(@Body() employee: Employee, @Res() response: Response): Promise<void> {
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

  @Get("findByDni/:dni")
  async findByDni(@Param('dni') dni: string): Promise<Employee> {
    return await this.employeeService.findByDni(dni);
  }

  @Get("findByDepart/:department_id")
  async findByDepart(@Param('department_id') department_id: number): Promise<Employee[]> {
    return await this.employeeService.findByDepartmentId(department_id);
  }
}