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
exports.PayrollService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const payroll_model_1 = require("./payroll.model");
let PayrollService = class PayrollService {
    payrollRepository;
    constructor(payrollRepository) {
        this.payrollRepository = payrollRepository;
    }
    create(payroll) {
        return this.payrollRepository.save(payroll);
    }
    findAll() {
        return this.payrollRepository.find();
    }
    findOne(id) {
        return this.payrollRepository.findOneBy({ id });
    }
    async update(id, payroll) {
        await this.payrollRepository.update(id, payroll);
        return this.findOne(id);
    }
    async remove(id) {
        await this.payrollRepository.delete(id);
    }
};
exports.PayrollService = PayrollService;
exports.PayrollService = PayrollService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(payroll_model_1.Payroll)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PayrollService);
//# sourceMappingURL=payroll.service.js.map