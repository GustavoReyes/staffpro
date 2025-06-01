"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaveRequestsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const leaveRequest_model_1 = require("./leaveRequest.model");
const leaveRequests_controller_1 = require("./leaveRequests.controller");
const leaveRequests_service_1 = require("./leaveRequests.service");
let LeaveRequestsModule = class LeaveRequestsModule {
};
exports.LeaveRequestsModule = LeaveRequestsModule;
exports.LeaveRequestsModule = LeaveRequestsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([leaveRequest_model_1.LeaveRequest])],
        controllers: [leaveRequests_controller_1.LeaveRequestController],
        providers: [leaveRequests_service_1.LeaveRequestService],
    })
], LeaveRequestsModule);
//# sourceMappingURL=leaveRequests.module.js.map