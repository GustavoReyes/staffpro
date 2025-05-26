import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Imports de los modelos //

import { Departments } from './departments.entity';

// Imports de los controladores //

import { DepartmentsController } from './departments.controller';

// Imports de los servicios //

import { DepartmentsService } from './departments.service';

// Modulo principal

@Module({
  imports: [TypeOrmModule.forFeature([Departments])],
  controllers: [DepartmentsController],
  providers: [DepartmentsService],
})
export class DepartmentsModule {}