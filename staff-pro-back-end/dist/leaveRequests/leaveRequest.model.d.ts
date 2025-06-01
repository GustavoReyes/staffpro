export declare class LeaveRequest {
    id: number;
    employee_dni?: string;
    type?: string;
    start_date?: Date;
    end_date?: string;
    status?: string;
    constructor(id: number, employee_dni?: string, type?: string, start_date?: Date, end_date?: string, status?: string);
}
