import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Imports de los modelos //

import { Users } from './users.entity';

// Imports de los controladores //

import { UsersController } from './users.controller';

// Imports de los servicios //

import { UsersService } from './users.service';

// Modulo principal

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}