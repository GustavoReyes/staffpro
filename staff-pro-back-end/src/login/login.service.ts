
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/user.model';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class LoginService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async register(email: string, password: string): Promise<User | null> {
    const existingUser = await this.usersService.findByEmail(email);
    if (existingUser) return null;

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await this.usersService.create({ email, password: hashedPassword });
   return newUser;
  }

  async login(email: string, password: string): Promise<{ access_token?: string }> {
    const user = await this.usersService.findByEmail(email);
    if (!user) {
        return {};
    }     
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid)  {
       return {}; 
    } 
    const payload = { sub: user.id_user, email: user.email };
    const token = this.jwtService.sign(payload);
    console.log("Accediste");
    return { access_token: token };
  }
}
