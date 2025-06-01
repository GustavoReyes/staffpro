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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const employee_model_1 = require("./employee.model");
let EmployeeService = class EmployeeService {
    employeeRepository;
    constructor(employeeRepository) {
        this.employeeRepository = employeeRepository;
    }
    async create(employee) {
        return await this.employeeRepository.save(employee);
    }
    async findAll() {
        return await this.employeeRepository.find();
    }
    async findByDepartmentId(department_id) {
        return await this.employeeRepository.findBy({ department_id });
    }
    async findByUserId(id_user) {
        return this.employeeRepository.findOne({
            where: { user: { id_user: id_user } },
            relations: ['user'],
        });
    }
    async update(id_user, updateData) {
        const user = await this.employeeRepository.findOneBy({ id_user });
        if (!user) {
            return null;
        }
        const updatedUser = this.employeeRepository.merge(user, updateData);
        return await this.employeeRepository.save(updatedUser);
    }
    async delete(id_user) {
        const result = await this.employeeRepository.delete({ id_user });
        return result.affected !== 0;
    }
};
exports.EmployeeService = EmployeeService;
exports.EmployeeService = EmployeeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(employee_model_1.Employee)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EmployeeService);
//# sourceMappingURL=employee.service.js.map