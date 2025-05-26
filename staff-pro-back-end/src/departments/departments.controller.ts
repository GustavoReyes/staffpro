import {
  Controller,
} from '@nestjs/common';

import { DepartmentsService } from 'src/departments/departments.service';

@Controller('departments')
export class DepartmentsController {
  constructor(private readonly departmentsService: DepartmentsService) {}

}
