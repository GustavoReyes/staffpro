import { Repository } from 'typeorm';
import { User } from './user.model';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    findByEmail(email: string): Promise<User | null>;
    findAll(): Promise<User[]>;
    findById(id_user: number): Promise<User | null>;
    create(userData: Partial<User>): Promise<User>;
}
