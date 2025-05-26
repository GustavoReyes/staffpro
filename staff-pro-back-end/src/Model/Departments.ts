import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Departments")
export class Departments{
    @PrimaryGeneratedColumn("identity")
    id:number;
    @Column({nullable:true})
    name:string;

    constructor(id:number,name:string){
        this.id=id
        this.name=name

    }

}