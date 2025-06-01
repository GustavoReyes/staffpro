import { DepartmentsService } from './departments.service';
import { Department } from './department.model';
export declare class DepartmentsController {
    private readonly departmentsService;
    constructor(departmentsService: DepartmentsService);
    create(department: Department): void;
    findAll(): Promise<Department[]>;
    findById(id: number): Promise<Department>;
    update(id: number, updateData: Department): Promise<void>;
    delete(id: number): void;
}
