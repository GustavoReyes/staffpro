import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("leaveRequests")
export class LeaveRequests{
    @PrimaryGeneratedColumn("identity")
    id:number;
    @Column()
    employee_dni:string;
    @Column({nullable:true})
    type:string;
    @Column({nullable:true})
    start_date:string;
    @Column({nullable:true})
    end_date:string;
    @Column()
    status:string;

    constructor(id:number,employee_dni:string,type:string,start_date:string,end_date:string,status:string){
        this.id=id
        this.employee_dni=employee_dni
        this.type=type
        this.start_date=start_date
        this.end_date=end_date
        this.status=status
    }

}