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
exports.LoginService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const users_service_1 = require("../users/users.service");
let LoginService = class LoginService {
    usersService;
    jwtService;
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async register(email, password) {
        const existingUser = await this.usersService.findByEmail(email);
        if (existingUser)
            return null;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await this.usersService.create({ email, password: hashedPassword });
        return newUser;
    }
    async login(email, password) {
        const user = await this.usersService.findByEmail(email);
        if (!user) {
            return {};
        }
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            return {};
        }
        const payload = { sub: user.id_user, email: user.email };
        const token = this.jwtService.sign(payload);
        return { access_token: token };
    }
};
exports.LoginService = LoginService;
exports.LoginService = LoginService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], LoginService);
//# sourceMappingURL=login.service.js.map