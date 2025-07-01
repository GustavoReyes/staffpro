export class Employee{
        dni: string;
        name: string;
        id_user: number;
        department_id: number;
        work_day: number;
        schedule: string;
        base_salary: number;
        position: string;
        hire_date: Date;
        irpf_idx: number;

           constructor(
            dni: string,
            name: string,
            id_user: number,
            department_id: number,
            work_day: number,
            schedule: string,
            base_salary: number,
            position: string,
            hire_date: Date,
            irpf_idx:number
        ) {
            this.dni = dni;
            this.name = name;
            this.id_user = id_user;
            this.department_id = department_id;
            this.work_day = work_day;
            this.schedule = schedule;
            this.base_salary = base_salary;
            this.position = position;
            this.hire_date = hire_date;
            this.irpf_idx=irpf_idx
        }
}
