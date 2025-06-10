import { IsAlphanumeric, IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class EmployeeAltaDto {
    @IsNotEmpty()
    @IsAlphanumeric()
    dni: string;
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    @IsNumber()
    department_id:number;
    work_day: number;
    @IsNumber()
    work_hour: number;
    @IsNumber()
    base_salary: number;
    @IsString()
    position: string;
    @IsDate()
    hire_date: Date;
 

    constructor(
        dni: string,
        name: string,
        department_id: number,
        work_day?: number,
        work_hour?: number,
        base_salary?: number,
        position?: string,
        hire_date?: Date
    ) {
        this.dni = dni;
        this.name = name; 
        this.department_id = department_id;
        this.work_day = work_day;
        this.work_hour = work_hour;
        this.base_salary = base_salary;
        this.position = position;
        this.hire_date = hire_date;
    }
    
}