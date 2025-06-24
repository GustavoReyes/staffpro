import { Type } from "class-transformer";
import { IsDate, IsEnum, IsInt, IsOptional, IsString } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export enum LeaveRequestStatus {
  ACCEPTED = 'accepted',
  PENDING = 'pending',
  REJECTED = 'rejected'
}

export class LeaveRequestDto {

  @ApiProperty({example: 0, description:'ID del usuario solicitante'})
  @IsInt()
  id_user_fk: number;

  @ApiPropertyOptional({ example: 0, description: 'ID de la solicitud de ausencia' })
  @IsOptional()
  @IsInt()
  id?: number;

  @ApiPropertyOptional({ example: 'SwaggerTest', description: 'Tipo de ausencia' })
  @IsOptional()
  @IsString()
  type?: string;

  @ApiPropertyOptional({ example: '2025-05-05', description: 'Fecha de inicio', type: String, format: 'date' })
  @IsOptional()
  @Type(() => Date)
  @IsDate()
  start_date?: Date;

  @ApiPropertyOptional({ example: '2026-06-06', description: 'Fecha de fin', type: String, format: 'date' })
  @IsOptional()
  @Type(() => Date)
  @IsDate()
  end_date?: Date;

  @ApiPropertyOptional({ enum: LeaveRequestStatus, description: 'Estado de la solicitud' })
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