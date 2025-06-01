import { Response } from 'express';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUserByEmail(email: string, response: Response): Promise<void>;
    getAllUsers(response: Response): Promise<Response<any, Record<string, any>>>;
    createUser(datos: any, response: Response): Promise<Response<any, Record<string, any>>>;
}
