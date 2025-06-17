import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { JwtStrategy } from './jwt.strategy';

import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    JwtModule.register({
      secret: 'contraseña_secreta',  
      signOptions: { expiresIn: '12h' },
    }),
    UsersModule,
  ],
  providers: [LoginService, JwtStrategy],
  controllers: [LoginController],
})
export class LoginModule {}
