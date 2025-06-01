import { Response } from 'express';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.model';
export declare class EmployeeController {
    private readonly employeeService;
    constructor(employeeService: EmployeeService);
    create(employee: Employee, response: Response): Promise<void>;
    findAll(): Promise<Employee[]>;
    findByUser(id_user: number): Promise<Employee>;
    findByDepart(department_id: number): Promise<Employee[]>;
    update(id_user: number, updateData: Employee): Promise<Employee>;
    delete(id_user: number): Promise<boolean>;
}
