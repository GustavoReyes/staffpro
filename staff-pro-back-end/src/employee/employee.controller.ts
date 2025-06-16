import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { EmployeeService } from './employee.service';
import { EmployeeAltaDto } from './dtos/employeeAltaDto';
import { EmployeeDatosDto } from './dtos/employeeDatosDto';
import { LoginGuard } from 'src/login/login.guard';
import { RolesGuard } from 'src/login/roles.guard';
import { Roles } from 'src/login/roles.decorator';

 
@Controller('employees')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) { }

@UseGuards(LoginGuard, RolesGuard)
  @Roles('admin')
  @Post("alta/:email")
  async create(@Param('email') email: string, @Body() employee: EmployeeAltaDto, @Res() response: Response) {
    const result = await this.employeeService.create( employee, email);
    if (result) {
      response.status(200).send('Empleado agregado correctamente');
    } else {
      response.status(409).send('Hubo un error al agregar el empleado');
    }
  }
 @UseGuards(LoginGuard, RolesGuard)
@Roles('admin')
  @Get("findAll")
  findAll(): Promise<EmployeeDatosDto[]> {
    return this.employeeService.findAll();
  }

  @Get("findByUser/:id_user")
  async findByUser(@Param('id_user') id_user: number){
    return await this.employeeService.findByUserId(id_user);
  }
@UseGuards(LoginGuard, RolesGuard)
@Roles('admin', 'user')
  @Get('myProfile')
  getMyProfile(@Req() req) {
  // accedemos a la información del token, con el @Req 
  return this.employeeService.findByUserId(req.user.id_user);
}
@UseGuards(LoginGuard, RolesGuard)
@Roles('admin')
  @Get("findByEmail/:email")
  async findByEmail(@Param('email') email: string) {  
    return await this.employeeService.findByEmail(email);
  }

 
  @Get("findByDepart/:department_id")
  async findByDepart(@Param('department_id') department_id: number) {
    return await this.employeeService.findByDepartmentId(department_id);
  }
  
  @UseGuards(LoginGuard, RolesGuard)
@Roles('admin')
  @Patch('patch/:email')
async updateByEmail(
  @Param('email') email: string,
  @Body() updateData: Partial<EmployeeAltaDto>
): Promise<EmployeeDatosDto> {
  return await this.employeeService.updateByEmail(email, updateData);
}
@UseGuards(LoginGuard, RolesGuard)
@Roles('admin')
@Delete('delete/:email')
async deleteByEmail(@Param('email') email: string): Promise<{ deleted: boolean }> {
  const success = await this.employeeService.deleteByEmail(email);
  return { deleted: success };
}
}