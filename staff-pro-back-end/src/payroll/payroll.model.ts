import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Payroll")
export class Payroll{
    @PrimaryGeneratedColumn("identity")
    id:number;
    @Column()
    employee_dni?:string;
    @Column({nullable:true})
    month?:string;
    @Column({nullable:true})
    year?:string;
    @Column()
    base_salary?:string;
    @Column()
    bonuses?:string;
    @Column()
    deductions?:string;
    @Column()
    total?:string;

    constructor(id:number,employee_dni:string,month:string,year:string,base_salary:string,bonuses:string,deductions:string,total:string){
        this.id=id
        this.employee_dni=employee_dni
        this.month=month
        this.year=year
        this.base_salary=base_salary
        this.bonuses=bonuses
        this.deductions=deductions
        this.total=total
    }

}