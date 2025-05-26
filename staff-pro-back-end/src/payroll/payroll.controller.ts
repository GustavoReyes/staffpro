import {
  Controller,
} from '@nestjs/common';

import { PayrollService } from 'src/payroll/payroll.service';

@Controller('payroll')
export class PayrollController {
  constructor(private readonly payrollService: PayrollService) {}

}
