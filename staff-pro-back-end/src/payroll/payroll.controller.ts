import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { PayrollService } from './payroll.service';
import { Payroll } from './payroll.model';
import { PayrollDto } from './Dtos/PayrollDto';

@Controller('payroll')
export class PayrollController {
  constructor(private readonly payrollService: PayrollService) { }

  @Get()
  findAll() {
    return this.payrollService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.payrollService.findOne(id);
  }

  @Post('alta')
  create(@Body() PayrollDto: PayrollDto) {
    return this.payrollService.create(PayrollDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payroll: Payroll) {
    return this.payrollService.update(id, payroll);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.payrollService.remove(id);
  }


}
