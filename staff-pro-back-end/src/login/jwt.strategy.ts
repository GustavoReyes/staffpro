import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), 
      ignoreExpiration: false,
      secretOrKey: 'contraseña_secreta', // Debe coincidir con el secreto usado en JwtModule
    });
  }

  async validate(payload: any) {
    return { id_user: payload.sub, email: payload.email };
  }
}
