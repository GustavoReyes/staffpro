import { Type } from "class-transformer";
import { IsDate, IsEnum, IsInt, IsOptional, IsString } from "class-validator";

export enum LeaveRequestStatus {
  ACCEPTED = 'accepted',
  PENDING = 'pending',
  REJECTED = 'rejected'
}

export class LeaveRequestDto {

  @IsInt()
  id_user_fk: number;

  @IsOptional()
  @IsInt()
  id?: number;

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
    id_user_fk:number,
    id:number,
    type:string,
    start_date:Date,
    end_date:Date,
    status:LeaveRequestStatus
  ){
    this.id_user_fk=id_user_fk,
    this.id=id,
    this.type=type
    this.start_date=start_date
    this.end_date=end_date
    this.status=status
  }

}