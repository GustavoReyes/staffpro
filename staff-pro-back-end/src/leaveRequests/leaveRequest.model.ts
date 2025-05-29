//PERMISOS
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("leave_request")
export class LeaveRequest{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    employee_dni?:string;
    @Column({nullable:true})
    type?:string;
    @Column({type:"datetime"})
    start_date?:Date;
    @Column({nullable:true})
    end_date?:string;
    @Column()
    status?:string;

    constructor(id:number,employee_dni?:string,type?:string,start_date?:Date,end_date?:string,status?:string){
        this.id=id
        this.employee_dni=employee_dni
        this.type=type
        this.start_date=start_date || new Date();
        this.end_date=end_date
        this.status=status
    }

}