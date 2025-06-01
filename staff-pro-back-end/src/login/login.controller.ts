import { Controller, Post, Body, Res, UseGuards, Get, Req } from '@nestjs/common';
import { Response } from 'express';
import { LoginService } from './login.service';
import { LoginGuard } from './login.guard';


@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('register')
  async register(
    @Body('email') email: string,
    @Body('password') password: string,
    @Res() response: Response
  ) {
    if (!email || !password) {
      return response.status(400).json({ message: 'Email y contraseña son requeridos' });
    }

    const user = await this.loginService.register(email, password);

    if (user) {
      response.status(201).json({ message: 'Usuario registrado', user });
    } else {
      response.status(409).json({ message: 'El email ya está registrado' });
    }
  }

  @Post('login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
    @Res() response: Response
  ) {
    const result = await this.loginService.login(email, password);

    if (result.access_token) {
      response.status(200).json(result);
    } else {
      response.status(401).json({ message: 'Credenciales inválidas' });
    }
  }
//ruta protegida con LoginGuard
@UseGuards(LoginGuard)
  @Get('perfil')
  getProfile(@Req() req) {
    return req.user; 
  }
}
 