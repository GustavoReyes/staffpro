import { Type } from "class-transformer";
import { IsDate, IsEnum, IsInt, IsOptional, IsString } from "class-validator";

export enum LeaveRequestStatus {
  ACCEPTED = 'accepted',
  PENDING = 'pending',
  REJECTED = 'rejected'
}

export class LeaveRequestDto {

  @IsInt()
  id: number;

  @IsInt()
  id_user_fk: number;

  @IsOptional()
  @IsString()
  type?: string;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  start_date?: Date;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  end_date?: Date;

  @IsOptional()
  @IsEnum(LeaveRequestStatus)
  status?: string;

  constructor(
    id:number,
    id_user_fk:number,
    type:string,
    start_date:Date,
    end_date:Date,
    status:LeaveRequestStatus
  ){
    this.id=id,
    this.id_user_fk=id_user_fk,
    this.type=type
    this.start_date=start_date
    this.end_date=end_date
    this.status=status
  }

}