import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';

import { User } from './user.model';
import { UserService } from './user.service';
import {Response } from 'express';


 

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

/**
 *llama al metodo para crear un nuevo usuario, 
 *
 * @param {User} user
 * @param {Response} response si lo crea devuelve 200, si algo va mal lanza un 409
 * @return {*}  {Promise<void>}
 * @memberof UserController
 */
@Post("alta")
async create(@Body () user:User,@Res() response:Response):Promise<void> {
 const result= await this.userService.create(user);
 if(result){
   response.status(200).send();
}else {
  response.status(409).send();
}
 
}


@Get("findAll")
async findAll(): Promise<User[]> {
       return await this.userService.findAll();
  }


@Get("findByDni/:dni")
async findByDni(@Param ('dni')dni:string): Promise<User> {
       return await this.userService.findByDni(dni);
  }
}
