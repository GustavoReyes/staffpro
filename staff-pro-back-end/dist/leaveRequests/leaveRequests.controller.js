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
exports.LeaveRequestController = void 0;
const common_1 = require("@nestjs/common");
const leaveRequests_service_1 = require("./leaveRequests.service");
let LeaveRequestController = class LeaveRequestController {
    leaveRequestService;
    constructor(leaveRequestService) {
        this.leaveRequestService = leaveRequestService;
    }
};
exports.LeaveRequestController = LeaveRequestController;
exports.LeaveRequestController = LeaveRequestController = __decorate([
    (0, common_1.Controller)('leaveRequests'),
    __metadata("design:paramtypes", [leaveRequests_service_1.LeaveRequestService])
], LeaveRequestController);
//# sourceMappingURL=leaveRequests.controller.js.map