import {
  Controller,
} from '@nestjs/common';

import { LeaveRequestService } from 'src/leaveRequests/leaveRequests.service';

@Controller('leaveRequests')
export class LeaveRequestController {
  constructor(private readonly leaveRequestService: LeaveRequestService) {}

}
