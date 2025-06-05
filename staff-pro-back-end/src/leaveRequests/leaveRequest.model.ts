// PERMISOS

import { User } from "src/users/user.model";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("leave_requests")
export class LeaveRequest{
    @PrimaryGeneratedColumn()
    id:number;
    @ManyToOne(() => User, user => user.leaveRequests)
    @JoinColumn({ name: "id_user_fk", referencedColumnName: "id_user", foreignKeyConstraintName: "relationUserId" })
    user?: User;
    @Column({nullable:true})
    type?:string;
    @Column({type:"datetime"})
    start_date?:Date;
    @Column({nullable:true})
    end_date?:Date;
    @Column()
    status?:string;

    constructor(
        id?:number,
        type?:string,
        start_date?:Date,
        end_date?:Date,
        status?:string
    ){
        this.id=id
        this.type=type
        this.start_date=start_date || new Date();
        this.end_date=end_date || new Date();
        this.status=status
    }

}