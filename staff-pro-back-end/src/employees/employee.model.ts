import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Employee")
export class Employee{
    @PrimaryGeneratedColumn("identity")
    id:number;
    @Column()
    user_dni?:string;
    @Column()
    position?:string;
    @Column()
    salary?:string;
    @Column({type:"datetime"})
    hire_date?:Date;

    constructor(id:number,user_dni?:string,position?:string,salary?:string,hire_date?:Date){
        this.id=id
        this.user_dni=user_dni
        this.position=position
        this.salary=salary
        this.hire_date=hire_date || new Date();
    }

}