export class UserResultadoDto {

    email: string;
    password: string;

    constructor(id_user: number, email: string, password: string) {

        this.email = email;
        this.password = password;
    }
}   