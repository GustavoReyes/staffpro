import { Department } from 'src/departments/department.model';
import { User } from 'src/users/user.model';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";

@Entity("employees")
export class Employee {
    @PrimaryColumn()
    dni: string;
    @Column()
    name?: string;
    @Column()
    id_user?: number;
    @Column()
    department_id?: number;
    @Column()
    work_day?: number;
    @Column()
    work_hour?: number;
    @Column()
    base_salary?: number;
    @Column()
    position?: string;
    @Column()
    hire_day?: Date;

    constructor(
        dni: string,
        name?: string,
        id_user?: number,
        department_id?: number,
        work_day?: number,
        work_hour?: number,
        base_salary?: number,
        position?: string,
        hire_day?: Date
    ) {
        this.dni = dni;
        this.name = name;
        this.id_user = id_user;
        this.department_id = department_id;
        this.work_day = work_day;
        this.work_hour = work_hour;
        this.base_salary = base_salary;
        this.position = position;
        this.hire_day = hire_day;
    }

    @ManyToOne(() => Department, (department) => department.employees)
    @JoinColumn({ name: 'department_id' })
    department: Department;

    @OneToOne(() => User, user => user.employee, { eager: true })
    @JoinColumn({ name: 'id_user' })
    user: User;

}


/* import { Column, Entity, PrimaryColumn } from "typeorm";

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

} */