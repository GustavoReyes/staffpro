export class Payroll {
  id: number;
  user_dni: string;
  base_salary?: number
  date?: Date;
  bonus_1?: number;
  bonus_2?: number;
  bonus_3?: number;
  social_security?: number;
  irpf?: number;
  advance?: number;
  deduction_1?: number;
  deduction_2?: number;
  deduction_3?: number;
  total?: number;

  

  constructor(
    id: number,
    user_dni: string,
    base_salary?: number,
    date?: Date,
    bonus_1?: number,
    bonus_2?: number,
    bonus_3?: number,
    social_security?: number,
    irpf?: number,
    advance?: number,
    deduction_1?: number,
    deduction_2?: number,
    deduction_3?: number,
    total?: number
  ) {
    this.id = id;
    this.user_dni = user_dni;
    this.base_salary = base_salary;
    this.date = date;
    this.bonus_1 = bonus_1;
    this.bonus_2 = bonus_2;
    this.bonus_3 = bonus_3;
    this.social_security = social_security;
    this.irpf = irpf;
    this.advance = advance;
    this.deduction_1 = deduction_1;
    this.deduction_2 = deduction_2;
    this.deduction_3 = deduction_3;
    this.total = total;
  }
}
