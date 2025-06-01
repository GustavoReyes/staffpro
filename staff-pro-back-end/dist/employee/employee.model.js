"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
const department_model_1 = require("../departments/department.model");
const user_model_1 = require("../users/user.model");
const typeorm_1 = require("typeorm");
let Employee = class Employee {
    dni;
    name;
    id_user;
    department_id;
    work_day;
    work_hour;
    base_salary;
    position;
    hire_day;
    constructor(dni, name, id_user, department_id, work_day, work_hour, base_salary, position, hire_day) {
        this.dni = dni;
        this.name = name;
        this.id_user = id_user;
        this.department_id = department_id;
        this.work_day = work_day;
        this.work_hour = work_hour;
        this.base_salary = base_salary;
        this.position = position;
        this.hire_day = hire_day;
    }
    department;
    user;
};
exports.Employee = Employee;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Employee.prototype, "dni", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Employee.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Employee.prototype, "id_user", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Employee.prototype, "department_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Employee.prototype, "work_day", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Employee.prototype, "work_hour", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Employee.prototype, "base_salary", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Employee.prototype, "position", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Employee.prototype, "hire_day", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => department_model_1.Department, (department) => department.employees),
    (0, typeorm_1.JoinColumn)({ name: 'department_id' }),
    __metadata("design:type", department_model_1.Department)
], Employee.prototype, "department", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_model_1.User, user => user.employee, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'id_user' }),
    __metadata("design:type", user_model_1.User)
], Employee.prototype, "user", void 0);
exports.Employee = Employee = __decorate([
    (0, typeorm_1.Entity)("employees"),
    __metadata("design:paramtypes", [String, String, Number, Number, Number, Number, Number, String, Date])
], Employee);
//# sourceMappingURL=employee.model.js.map