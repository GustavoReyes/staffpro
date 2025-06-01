import { Repository } from 'typeorm';
import { LeaveRequest } from './leaveRequest.model';
export declare class LeaveRequestService {
    private contactosRepository;
    constructor(contactosRepository: Repository<LeaveRequest>);
}
