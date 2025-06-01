import { PayrollService } from './payroll.service';
import { Payroll } from './payroll.model';
export declare class PayrollController {
    private readonly payrollService;
    constructor(payrollService: PayrollService);
    create(payroll: Payroll): Promise<Payroll>;
    findAll(): Promise<Payroll[]>;
    findOne(id: number): Promise<Payroll>;
    update(id: number, payroll: Payroll): Promise<Payroll>;
    remove(id: number): Promise<void>;
}
