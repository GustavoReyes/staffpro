import { Employee } from "src/employee/employee.model";
export declare class Department {
    id: number;
    name?: string;
    constructor(id: number, name?: string);
    employees: Employee[];
}
