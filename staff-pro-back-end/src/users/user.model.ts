import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("User")
export class User{
    @PrimaryGeneratedColumn("identity")
    dni:string;
    @Column()
    name?:string;
    @Column({nullable:true})
    email?:string;
    @Column({nullable:true})
    password?:string;
    @Column()
    role?:string;
    @Column()
    departmentId?:number;

    constructor(dni:string,name?:string,email?:string,password?:string,role?:string,departmentId?:number){
        this.dni=dni
        this.name=name
        this.email=email
        this.password=password
        this.role=role
        this.departmentId=departmentId
    }

}