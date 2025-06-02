import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Imports de los modulos //
import { DepartmentsModule } from './departments/departments.module';
import { LeaveRequestsModule } from './leaveRequests/leaveRequests.module';
import { PayrollModule } from './payroll/payroll.module';
import { EmployeeModule } from './employee/employee.module';
import { LoginModule } from './login/login.module';
import { UsersModule } from './users/users.module';


// Modulo principal
@Module({
  imports: [TypeOrmModule.forRoot({
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
    LoginModule,
    PayrollModule,
    UsersModule
  ],
})
export class AppModule { }