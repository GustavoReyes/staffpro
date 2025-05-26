import {
  Controller,
} from '@nestjs/common';

import { DepartmentsService } from 'src/Service/departments.service';

@Controller('departments')
export class DepartmentsController {
  constructor(private readonly departmentsService: DepartmentsService) {}

}
