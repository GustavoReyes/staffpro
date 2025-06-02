import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';

import { UsersService } from './users.service';
import { User } from './user.model';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get('findByEmail/:email')
  async getUserByEmail(@Param('email') email: string, @Res() response: Response) {
    const user = await this.usersService.findByEmail(email);

    if (user) {
      response.status(200).json(user);
    } else {
      response.status(404).json({ message: 'Usuario no encontrado' });
    }
  }

  @Get('finAll')
  async getAllUsers(@Res() response: Response) {
    const users = await this.usersService.findAll();
    if (!users || users.length == 0) {
      return response.status(404).json({ message: 'No se encontraron usuarios' });
    } else {
      return response.status(200).json(users);
    }
  }
  @Post('alta')
  async createUser(@Body() datos: any, @Res() response: Response) {

    // Verificar si el usuario ya existe
    const existing = await this.usersService.findByEmail(datos.email);
    if (existing) {
      return response.status(400).json({ message: 'El usuario ya existe' });
    } else {
      const newUser = await this.usersService.create(datos);
      response.status(201).json(newUser);
    }
  }
}
