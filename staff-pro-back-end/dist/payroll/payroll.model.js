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
exports.Payroll = void 0;
const typeorm_1 = require("typeorm");
let Payroll = class Payroll {
    id;
    user_dni;
    base_salary;
    date;
    bonus_1;
    bonus_2;
    bonus_3;
    social_security;
    irpf;
    advance;
    deduction1;
    deduction2;
    deduction3;
    total;
    constructor(id, user_dni, base_salary, date, bonus_1, bonus_2, bonus_3, social_security, irpf, advance, deduction1, deduction2, deduction3, total) {
        this.id = id;
        this.user_dni = user_dni;
        this.base_salary = base_salary;
        this.date = date;
        this.bonus_1 = bonus_1;
        this.bonus_2 = bonus_2;
        this.bonus_3 = bonus_3;
        this.social_security = social_security;
        this.irpf = irpf;
        this.advance = advance;
        this.deduction1 = deduction1;
        this.deduction2 = deduction2;
        this.deduction3 = deduction3;
        this.total = total;
    }
};
exports.Payroll = Payroll;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Payroll.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Payroll.prototype, "user_dni", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Payroll.prototype, "base_salary", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Payroll.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Payroll.prototype, "bonus_1", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Payroll.prototype, "bonus_2", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Payroll.prototype, "bonus_3", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Payroll.prototype, "social_security", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Payroll.prototype, "irpf", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Payroll.prototype, "advance", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Payroll.prototype, "deduction1", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Payroll.prototype, "deduction2", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Payroll.prototype, "deduction3", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Payroll.prototype, "total", void 0);
exports.Payroll = Payroll = __decorate([
    (0, typeorm_1.Entity)("payroll"),
    __metadata("design:paramtypes", [Number, String, Number, Date, Number, Number, Number, Number, Number, Number, Number, Number, Number, Number])
], Payroll);
//# sourceMappingURL=payroll.model.js.map