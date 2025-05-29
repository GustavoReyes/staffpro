import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("users")
export class User{
    @PrimaryColumn()
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
    department_id?:number;

    

    constructor(dni:string,name?:string,email?:string,password?:string,role?:string,department_id?:number){
        this.dni=dni
        this.name=name
        this.email=email
        this.password=password
        this.role=role
        this.department_id=department_id
    }

}