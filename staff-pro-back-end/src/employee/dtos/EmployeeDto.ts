import { Type } from "class-transformer";
import { IsAlphanumeric, IsDate, IsDecimal, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class EmployeeDto {
    @IsNotEmpty()
    @IsAlphanumeric()
    dni: string;
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    department_id: number;
    @IsNumber()
    work_day: number;
    @IsString()
    schedule: string;
    @IsNumber()
    base_salary: number;
    @IsString()
    position: string;
    @IsDate()
    hire_date: Date;
    @IsDecimal()
    @Type(()=>Number)
    irpf_idx?: number;

    constructor(
        dni: string,
        name: string,
        department_id: number,
        work_day?: number,
        schedule?: string,
        base_salary?: number,
        position?: string,
        hire_date?: Date,
        irpf_idx?:number
    ) {
        this.dni = dni;
        this.name = name;
        this.department_id = department_id;
        this.work_day = work_day;
        this.schedule = schedule;
        this.base_salary = base_salary;
        this.position = position;
        this.hire_date = hire_date;
        this.irpf_idx = irpf_idx
    }
}