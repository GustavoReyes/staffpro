import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
  Res,
} from '@nestjs/common';

import { LeaveRequestService } from './leaveRequests.service';
import { LeaveRequestDto } from './dto/leaveRequestDto';
import { Response } from 'express';

@Controller('leaveRequests')
export class LeaveRequestController {
  constructor(private readonly leaveRequestService: LeaveRequestService) {}

  @Get()
  async findAll() {
    const requests = await this.leaveRequestService.findAll();
    return requests.map(request => {
      if (request.user) delete request.user.password;
      return request;
    });
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id:number,@Res() response:Response) {
    const leaveRequest = await this.leaveRequestService.findOne(id);
    if (leaveRequest) {
      if (leaveRequest.user) {
        delete leaveRequest.user.password
      }
      return response.status(200).json(leaveRequest);
    } else {
      return response.status(404).send('Solicitud no encontrada');
    }
  }

  @Post()
  async create(@Body() dto: LeaveRequestDto) {
    return this.leaveRequestService.create(dto);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id:number,@Body() dto: Partial<LeaveRequestDto>,@Res() response:Response) {
      const updated = await this.leaveRequestService.update(id, dto)
      if (updated){
        return response.status(200).json(updated)
      } else {
        return response.status(404).json({ message: 'Solicitud no encontrada' });
      }
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.leaveRequestService.remove(id);
  }
}