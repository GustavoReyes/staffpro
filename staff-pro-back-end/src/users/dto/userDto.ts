import { IsEmail, IsNotEmpty, Length } from "class-validator";

export class UserDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;
    @IsNotEmpty()
    @Length(6)
    //@IsStrongPassword()
    password: string;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }
}   