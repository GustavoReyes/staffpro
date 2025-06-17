import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { Employee } from "src/employee/employee.model";

@Entity("departments")
export class Department{
    @PrimaryGeneratedColumn(  )
    id:number;
    @Column( )
    name:string;

    constructor(id:number,name:string){
        this.id=id
        this.name=name

    }

    @OneToMany(() => Employee, (employee) => employee.department)
    employees: Employee[];

}