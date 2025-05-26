import {
  Controller,
} from '@nestjs/common';

import { EmployeesService } from 'src/Service/employees.service';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

}
