import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartmentsModule } from './departments/departments.module';


import { UsersModule } from './users/users.module';


@Module({
  imports: [DepartmentsModule, TypeOrmModule.forRoot({
type: 'mysql',
host: 'localhost',
port: 3306,
username: 'admin',
password: 'admin',
database: 'staffpro_db_data',
entities: [__dirname + '/**/*.entity{.ts,.js}'],
synchronize: false,
    }),
    UsersModule, DepartmentsModule
  ],
})
export class AppModule {}
