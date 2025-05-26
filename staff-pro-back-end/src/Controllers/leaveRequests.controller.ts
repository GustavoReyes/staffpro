import {
  Controller,
} from '@nestjs/common';

import { LeaveRequestService } from 'src/Service/leaveRequests.service';

@Controller('leaveRequests')
export class LeaveRequestController {
  constructor(private readonly leaveRequestService: LeaveRequestService) {}

}
