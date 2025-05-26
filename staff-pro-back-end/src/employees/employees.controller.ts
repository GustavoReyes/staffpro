import {
  Controller,
} from '@nestjs/common';

import { EmployeesService } from 'src/employees/employees.service';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

}
