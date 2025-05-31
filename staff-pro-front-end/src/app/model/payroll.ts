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
  deduction1?: number;
  deduction2?: number;
  deduction3?: number;
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
    deduction1?: number,
    deduction2?: number,
    deduction3?: number,
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
    this.deduction1 = deduction1;
    this.deduction2 = deduction2;
    this.deduction3 = deduction3;
    this.total = total;
  }
}
