export class employeePerfilDto{
        dni: string;
        name: string;
        work_day: number;
        work_hour: number;
        base_salary: number;
        position: string;
        hire_date: Date;
    
           constructor(
            dni: string,
            name: string,
            work_day?: number,
            work_hour?: number,
            base_salary?: number,
            position?: string,
            hire_date?: Date
        ) {
            this.dni = dni;
            this.name = name;
            this.work_day = work_day;
            this.work_hour = work_hour;
            this.base_salary = base_salary;
            this.position = position;
            this.hire_date = hire_date;
        }
}