import { IsEmail, IsNotEmpty, IsStrongPassword, Length } from "class-validator";

export class UserDto {

    id_user: number;
    @IsNotEmpty()
    @IsEmail()
    email: string;
    @IsNotEmpty()
    @Length(6)
    //@IsStrongPassword()
    password: string;
    
    constructor(id_user: number, email: string, password: string) {
        this.id_user = id_user;
        this.email = email;
        this.password = password;
    }   
}   