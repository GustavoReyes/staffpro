import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Employees")
export class Employees{
    @PrimaryGeneratedColumn("identity")
    id:number;
    @Column()
    user_dni:string;
    @Column()
    position:string;
    @Column()
    salary:string;
    @Column({nullable:true})
    hire_date:string;

    constructor(id:number,user_dni:string,position:string,salary:string,hire_date?:string){
        this.id=id
        this.user_dni=user_dni
        this.position=position
        this.salary=salary
        this.hire_date=hire_date
    }

}