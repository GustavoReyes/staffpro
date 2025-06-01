"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_module_1 = require("./users/users.module");
const departments_module_1 = require("./departments/departments.module");
const employee_module_1 = require("./employee/employee.module");
const leaveRequests_module_1 = require("./leaveRequests/leaveRequests.module");
const payroll_module_1 = require("./payroll/payroll.module");
const login_module_1 = require("./login/login.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [login_module_1.LoginModule, departments_module_1.DepartmentsModule, employee_module_1.EmployeeModule, leaveRequests_module_1.LeaveRequestsModule, payroll_module_1.PayrollModule, users_module_1.UsersModule, typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'root',
                database: 'staffpro_db_data',
                entities: [__dirname + '/**/*.model{.ts,.js}'],
                synchronize: false,
            }),
            departments_module_1.DepartmentsModule,
            employee_module_1.EmployeeModule,
            leaveRequests_module_1.LeaveRequestsModule,
            payroll_module_1.PayrollModule,
            users_module_1.UsersModule,
            login_module_1.LoginModule
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map