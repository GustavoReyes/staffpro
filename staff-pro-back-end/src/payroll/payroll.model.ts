import { IsNotEmpty } from "class-validator";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { Employee } from "src/employee/employee.model";

@Entity("payroll")
export class Payroll {

    @PrimaryGeneratedColumn()
    @IsNotEmpty()
    id: number;

    @Column()
    user_dni: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    base_salary: number

    @Column({ nullable: true })
    date: Date;

    @Column()
    period_in: Date;

    @Column()
    period_out: Date;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    social_security: number;
    
    @Column({ type: 'decimal', precision: 10, scale: 2 })
    irpf: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    bonus_1?: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    bonus_2?: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    bonus_3?: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    advance?: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    deduction_1?: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    deduction_2?: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    deduction_3?: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    total?: number;

    @ManyToOne(() => Employee, employee => employee.payrolls)
    @JoinColumn({ name: 'user_dni', referencedColumnName: 'dni' })
    employee: Employee;


    constructor(
        id: number,
        user_dni: string,
        base_salary: number,
        date: Date,
        period_in: Date,
        period_out: Date,
        social_security: number,
        irpf: number,
        bonus_1?: number,
        bonus_2?: number,
        bonus_3?: number,
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
        this.period_in = period_in;
        this.period_out = period_out;
        this.social_security = social_security;
        this.irpf = irpf;
        this.bonus_1 = bonus_1;
        this.bonus_2 = bonus_2;
        this.bonus_3 = bonus_3;
        this.advance = advance;
        this.deduction_1 = deduction_1;
        this.deduction_2 = deduction_2;
        this.deduction_3 = deduction_3;
        this.total = total;
    }
}  