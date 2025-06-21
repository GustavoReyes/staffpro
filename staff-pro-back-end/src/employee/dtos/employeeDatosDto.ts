export class EmployeeDatosDto{
        dni: string;
        name: string;
        id_user: number;
        department_id: number;
        work_day: number;
        work_hour: string;
        base_salary: number;
        position: string;
        hire_date: Date;
    
           constructor(
            dni: string,
            name: string,
            id_user: number,
            department_id: number,
            work_day?: number,
            work_hour?: string,
            base_salary?: number,
            position?: string,
            hire_date?: Date
        ) {
            this.dni = dni;
            this.name = name;
            this.id_user = id_user;
            this.department_id = department_id;
            this.work_day = work_day;
            this.work_hour = work_hour;
            this.base_salary = base_salary;
            this.position = position;
            this.hire_date = hire_date;
        }
}