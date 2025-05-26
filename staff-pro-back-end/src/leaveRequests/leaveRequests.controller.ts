import {
  Controller,
} from '@nestjs/common';

import { LeaveRequestService } from './leaveRequests.service';

@Controller('leaveRequests')
export class LeaveRequestController {
  constructor(private readonly leaveRequestService: LeaveRequestService) {}

}
