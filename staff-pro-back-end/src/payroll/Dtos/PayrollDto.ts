import { IsNumber, IsOptional, IsString, IsDateString, IsNotEmpty, IsDate } from 'class-validator';

export class PayrollDto {
    
    @IsString()
    @IsNotEmpty()
    user_dni: string;

    @IsNumber()
    @IsNotEmpty()
    base_salary: number;

    @IsOptional()
    @IsDate()
    date?: Date; 

    @IsDate()
    @IsNotEmpty()
    period_in: Date;

    @IsDate()
    @IsNotEmpty()
    period_out: Date;

    @IsOptional()
    @IsNumber()
    bonus_1?: number;

    @IsOptional()
    @IsNumber()
    bonus_2?: number;

    @IsOptional()
    @IsNumber()
    bonus_3?: number;

    @IsOptional()
    @IsNumber()
    social_security?: number;

    @IsOptional()
    @IsNumber()
    irpf?: number;

    @IsOptional()
    @IsNumber()
    advance?: number;

    @IsOptional()
    @IsNumber()
    deduction_1?: number;

    @IsOptional()
    @IsNumber()
    deduction_2?: number;

    @IsOptional()
    @IsNumber()
    deduction_3?: number;

    @IsOptional()
    @IsNumber()
    total?: number;
}