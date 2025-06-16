import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
 
import { UsersModule } from 'src/users/users.module';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { JwtStrategy } from './jwt.strategy';
 

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
