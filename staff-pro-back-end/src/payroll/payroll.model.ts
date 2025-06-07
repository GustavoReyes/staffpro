import { Employee } from "src/employee/employee.model";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("payroll")
export class Payroll {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    user_dni?: string;
    @Column()
    base_salary: number
    @Column({ nullable: true })
    date?: Date;
    @Column({ nullable: true })
    bonus_1?: number;
    @Column()
    bonus_2?: number;
    @Column()
    bonus_3?: number;
    @Column()
    social_security?: number;
    @Column()
    irpf?: number;
    @Column()
    advance?: number;
    @Column()
    deduction_1?: number;
    @Column()
    deduction_2?: number;
    @Column()
    deduction_3?: number;
    @Column()
    total?: number;

    @ManyToOne(() => Employee, employee => employee.payrolls)
    @JoinColumn({ name: 'user_dni', referencedColumnName: 'dni' })
    employee: Employee;


    constructor(
        id?: number,
        user_dni?: string,
        base_salary?: number,
        date?: Date,
        bonus_1?: number,
        bonus_2?: number,
        bonus_3?: number,
        social_security?: number,
        irpf?: number,
        advance?: number,
        deduction_1?: number,
        deduction_2?: number,
        deduction_3?: number,
        total?: number
    ) {
        this.id = id;
        this.user_dni = user_dni;
        this.base_salary = base_salary;
        this.date = date;
        this.bonus_1 = bonus_1;
        this.bonus_2 = bonus_2;
        this.bonus_3 = bonus_3;
        this.social_security = social_security;
        this.irpf = irpf;
        this.advance = advance;
        this.deduction_1 = deduction_1;
        this.deduction_2 = deduction_2;
        this.deduction_3 = deduction_3;
        this.total = total;
    }
}  