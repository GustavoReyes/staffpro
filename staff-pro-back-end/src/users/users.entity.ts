import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Users")
export class Users{
    @PrimaryGeneratedColumn("identity")
    dni:number;
    @Column()
    name:string;
    @Column({nullable:true})
    email:string;
    @Column({nullable:true})
    password:string;
    @Column()
    role:string;
    @Column()
    department_id:string;

    constructor(dni:number,name:string,email:string,password:string,role:string,department_id:string){
        this.dni=dni
        this.name=name
        this.email=email
        this.password=password
        this.role=role
        this.department_id=department_id
    }

}