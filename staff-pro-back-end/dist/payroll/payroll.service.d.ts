import { Repository } from 'typeorm';
import { Payroll } from './payroll.model';
export declare class PayrollService {
    private payrollRepository;
    constructor(payrollRepository: Repository<Payroll>);
    create(payroll: Payroll): Promise<Payroll>;
    findAll(): Promise<Payroll[]>;
    findOne(id: number): Promise<Payroll>;
    update(id: number, payroll: Payroll): Promise<Payroll>;
    remove(id: number): Promise<void>;
}
