import { Controller, Post, Body, Res, UseGuards, Get, Req } from '@nestjs/common';
import { Response } from 'express';
import { LoginService } from './login.service';
import { LoginGuard } from './login.guard';
import { UserDto } from 'src/users/dto/userDto';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) { }

 @Post('register')
  async register(@Body() userDto: UserDto) {
    const result = await this.loginService.register(userDto.email, userDto.password);
    if (!result) {
      return { message: 'Usuario ya existe o datos inválidos' };
    }
    return result;
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

}
