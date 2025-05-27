import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Imports de los modelos //

import { User } from './user.model';

// Imports de los controladores //

import { UsersController } from './users.controller';

// Imports de los servicios //

import { UsersService } from './users.service';

// Modulo principal

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}