import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Department")
export class Department{
    @PrimaryGeneratedColumn("identity")
    id:number;
    @Column({nullable:true})
    name?:string;

    constructor(id:number,name:string){
        this.id=id
        this.name=name

    }

}