import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';

import { UsersService } from './users.service';
import { User } from './user.model';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) { }

  /**
   *llama al metodo para crear un nuevo usuario, 
   *
   * @param {User} user
   * @param {Response} response si lo crea devuelve 200, si algo va mal lanza un 409
   * @return {*}  {Promise<void>}
   * @memberof UserController
   */
  @Post("alta")
  async create(@Body() user: User, @Res() response: Response): Promise<void> {
    const result = await this.userService.create(user);
    if (result) {
      response.status(200).send();
    } else {
      response.status(409).send();
    }

  }

  @Get("findAll")
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get("findByDni/:dni")
  async findByDni(@Param('dni') dni: string): Promise<User> {
    return await this.userService.findByDni(dni);
  }

  @Get("findByDepart/:department_id")
  async findByDepart(@Param('department_id') department_id: number): Promise<User[]> {
    return await this.userService.findByDepartmentId(department_id);
  }
}