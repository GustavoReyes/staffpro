import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
 
import { UsersModule } from './users/users.module';

// Imports de los modulos //

import { DepartmentsModule } from './departments/departments.module';
import { EmployeeModule } from './employee/employee.module';
import { LeaveRequestsModule } from './leaveRequests/leaveRequests.module';
import { PayrollModule } from './payroll/payroll.module';
import { LoginModule } from './login/login.module';


// Modulo principal

@Module({
  imports: [LoginModule, DepartmentsModule, EmployeeModule, LeaveRequestsModule, PayrollModule  , UsersModule, TypeOrmModule.forRoot({
type: 'mysql',
host: 'localhost',
port: 3306,
username: 'root',
password: 'root',
database: 'staffpro_db_data',
entities: [__dirname + '/**/*.model{.ts,.js}'],
synchronize: false,
    }),
    DepartmentsModule,
    EmployeeModule,
    LeaveRequestsModule,
    PayrollModule,
    UsersModule,
    LoginModule
  ],
})
export class AppModule {}