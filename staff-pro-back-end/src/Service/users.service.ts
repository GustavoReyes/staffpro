import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Users } from 'src/Model/Users';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(Users) private contactosRepository:Repository<Users>){}

  // TODO: Controller con las funcionalidades que tendra la columna de Users


}
