import { Repository } from 'typeorm';
import { Department } from './department.model';
export declare class DepartmentsService {
    private departmentRepository;
    constructor(departmentRepository: Repository<Department>);
    findAll(): Promise<Department[]>;
    findById(id: number): Promise<Department>;
    create(department: Department): void;
    update(id: number, department: Department): void;
    delete(id: number): void;
}
