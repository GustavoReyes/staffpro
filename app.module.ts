import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


import { UsersModule } from './users/users.module';


@Module({
  imports: [TypeOrmModule.forRoot({
type: 'mysql',
host: 'localhost',
port: 3307,
username: 'admin',
password: 'admin',
database: 'staffpro_db_data',
entities: [__dirname + '/**/*.entity{.ts,.js}'],
synchronize: false,
    }),
    UsersModule,
  ],
})
export class AppModule {}
