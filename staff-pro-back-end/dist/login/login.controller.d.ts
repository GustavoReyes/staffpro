import { Response } from 'express';
import { LoginService } from './login.service';
export declare class LoginController {
    private readonly loginService;
    constructor(loginService: LoginService);
    register(email: string, password: string, response: Response): Promise<Response<any, Record<string, any>>>;
    login(email: string, password: string, response: Response): Promise<void>;
    getProfile(req: any): any;
}
