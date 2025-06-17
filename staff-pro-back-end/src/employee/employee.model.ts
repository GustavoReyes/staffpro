import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm";

import { Department } from 'src/departments/department.model';
import { LeaveRequest } from 'src/leaveRequests/leaveRequest.model';
import { Payroll } from 'src/payroll/payroll.model';
import { User } from 'src/users/user.model';

@Entity("employees")
export class Employee {
    @PrimaryColumn()
    dni: string;
    @Column()
    name: string;
    @Column()
    id_user: number;
    @Column()
    department_id: number;
    @Column()
    work_day: number;
    @Column()
    work_hour: number;
    @Column()
    base_salary: number;
    @Column()
    position: string;
    @Column()
    hire_date: Date;


    constructor(
        dni: string,
        name: string,
        id_user: number,
        department_id: number,
        work_day?: number,
        work_hour?: number,
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

    @ManyToOne(() => Department, (department) => department.employees)
    @JoinColumn({ name: 'department_id' })
    department: Department;

    @OneToOne(() => User, user => user.employee, { eager: true })
    @JoinColumn({ name: 'id_user' })
    user: User;

    @OneToMany(() => Payroll, payroll => payroll.user_dni)
    @JoinColumn({ name: 'dni' })
    payrolls?: Payroll[];

    @OneToMany(() => LeaveRequest, leaveRequest => leaveRequest.employee)
    leaveRequests?: LeaveRequest[];

}
