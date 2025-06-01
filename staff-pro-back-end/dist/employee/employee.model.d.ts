import { Department } from 'src/departments/department.model';
import { User } from 'src/users/user.model';
export declare class Employee {
    dni: string;
    name?: string;
    id_user?: number;
    department_id?: number;
    work_day?: number;
    work_hour?: number;
    base_salary?: number;
    position?: string;
    hire_day?: Date;
    constructor(dni: string, name?: string, id_user?: number, department_id?: number, work_day?: number, work_hour?: number, base_salary?: number, position?: string, hire_day?: Date);
    department: Department;
    user: User;
}
