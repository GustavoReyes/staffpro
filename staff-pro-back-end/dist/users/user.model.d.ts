import { Employee } from "src/employee/employee.model";
export declare class User {
    id_user: number;
    email: string;
    password: string;
    constructor(id_user: number, name: string, email: string, password: string);
    employee: Employee;
}
