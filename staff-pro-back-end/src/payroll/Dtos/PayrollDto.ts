import { IsNumber, IsOptional, IsString, IsDateString } from 'class-validator';

export class PayrollDto {
    @IsString()
    user_dni: string;

    @IsNumber()
    base_salary: number;

    @IsOptional()
    @IsDateString()
    date?: Date;

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