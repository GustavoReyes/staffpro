import { Module } from '@nestjs/common';
import { DepartmentsController } from './departments.controller';
import { Department } from './departments.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartmentsService } from './departments.service';

@Module({
  imports:  [TypeOrmModule.forFeature([Department])],
  controllers: [DepartmentsController],
  providers: [DepartmentsService],
  exports: [DepartmentsService]
})
export class DepartmentsModule {}
