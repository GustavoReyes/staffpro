import { Employee } from "src/employee/employee.model";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity("users")
export class User {
    @PrimaryGeneratedColumn()
    id_user: number;
    @Column()
    email: string;
    @Column()
    password: string;

    constructor(
        id_user: number,
        email: string,
        password: string,
    ) {
        this.id_user = id_user;
        this.email = email;
        this.password = password;
        { }
    }
    @OneToOne(() => Employee, employee => employee.user)
    employee: Employee;
}