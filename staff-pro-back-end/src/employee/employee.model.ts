import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("employees")
export class Employee {
    @PrimaryColumn()
    dni: string;
    @Column()
    name?: string;
    @Column()
    email?: string;
    @Column()
    role?: string;
    @Column()
    department_id?: number;
    @Column()
    work_day?: number;
    @Column()
    work_hour?: number;
    @Column()
    salary?: number;
    @Column()
    position?: string;
    @Column()
    hire_day?: Date;


    constructor(dni: string, name?: string, email?: string,
        role?: string, department_id?: number, work_day?: number, work_hour?: number,
        salary?: number, position?: string, hire_day?: Date) {

        this.dni = dni;
        this.name = name;
        this.email = email;
        this.role = role;
        this.department_id = department_id;
        this.work_day = work_day;
        this.work_hour = work_hour;
        this.salary = salary;
        this.position = position
        this.hire_day = hire_day

    }

}