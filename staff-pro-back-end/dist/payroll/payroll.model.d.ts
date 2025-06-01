export declare class Payroll {
    id: number;
    user_dni?: string;
    base_salary: number;
    date?: Date;
    bonus_1?: number;
    bonus_2?: number;
    bonus_3?: number;
    social_security?: number;
    irpf?: number;
    advance?: number;
    deduction1?: number;
    deduction2?: number;
    deduction3?: number;
    total?: number;
    constructor(id?: number, user_dni?: string, base_salary?: number, date?: Date, bonus_1?: number, bonus_2?: number, bonus_3?: number, social_security?: number, irpf?: number, advance?: number, deduction1?: number, deduction2?: number, deduction3?: number, total?: number);
}
