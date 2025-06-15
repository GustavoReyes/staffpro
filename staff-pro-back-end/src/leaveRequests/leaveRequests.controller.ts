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
  UseGuards,
} from '@nestjs/common';

import { LeaveRequestsService } from './leaveRequests.service';
import { LeaveRequestDto } from './dto/leaveRequestDto';
import { Response } from 'express';
import { LoginGuard } from 'src/login/login.guard';
import { RolesGuard } from 'src/login/roles.guard';
import { Roles } from 'src/login/roles.decorator';

@UseGuards(LoginGuard, RolesGuard)
@Controller('leaveRequests')
export class LeaveRequestsController {
  constructor(private readonly leaveRequestsService: LeaveRequestsService) { }

  // @Roles('admin')
  @Get()
  async findAll() {
    const requests = await this.leaveRequestsService.findAll();
    return requests.map(request => {
      if (request.user) delete request.user.password;
      return request;
    });
  }

  // @Roles('admin','user')
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number, @Res() response: Response) {
    const leaveRequest = await this.leaveRequestsService.findOne(id);
    if (leaveRequest) {
      if (leaveRequest.user) {
        delete leaveRequest.user.password
      }
      return response.status(200).json(leaveRequest);
    } else {
      return response.status(404).send('Solicitud no encontrada');
    }
  }

  // @Roles('admin','user')
  @Post()
  async create(@Body() dto: LeaveRequestDto) {
    return this.leaveRequestsService.create(dto);
  }

  // @Roles('admin')
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number, @Body() dto: Partial<LeaveRequestDto>, @Res() response: Response) {
    const updated = await this.leaveRequestsService.update(id, dto)
    if (updated) {
      return response.status(200).json(updated)
    } else {
      return response.status(404).json({ message: 'Solicitud no encontrada' });
    }
  }

  // @Roles('admin')
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.leaveRequestsService.remove(id);
  }
}