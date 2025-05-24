import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './model/User';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';
import { UsersModule } from './users.module';

@Module({
  imports: [TypeOrmModule.forRoot({
type: 'mysql',
host: 'localhost',
port: 3307,
username: 'nestuser',
password: 'nestpass',
database: 'staffpro_db_data',
entities: [__dirname + '/**/*.entity{.ts,.js}'],
synchronize: false,
    }),
    UsersModule,
  ],
})
export class AppModule {}
