import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { UsersService } from './users.service';

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

  @Get('findAll')
  async getAllUsers(@Res() response: Response) {
    const users = await this.usersService.findAll();
    if (!users || users.length == 0) {
      return response.status(404).json({ message: 'No se encontraron usuarios' });
    } else {
      return response.status(200).json(users);
    }
  }
  
}
