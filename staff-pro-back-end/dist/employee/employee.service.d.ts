import { Repository } from 'typeorm';
import { Employee } from './employee.model';
export declare class EmployeeService {
    private readonly employeeRepository;
    constructor(employeeRepository: Repository<Employee>);
    create(employee: Employee): Promise<Employee>;
    findAll(): Promise<Employee[]>;
    findByDepartmentId(department_id: number): Promise<Employee[]>;
    findByUserId(id_user: number): Promise<Employee>;
    update(id_user: number, updateData: Employee): Promise<Employee | null>;
    delete(id_user: number): Promise<boolean>;
}
