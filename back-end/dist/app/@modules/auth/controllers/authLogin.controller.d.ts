import { LoginUserDTO } from '../dtos/login-user.dto';
import { AuthLoginService } from './../services/auth-login.service';
export declare class AuthLoginController {
    private authLoginService;
    constructor(authLoginService: AuthLoginService);
    admin(loginUserDto: LoginUserDTO): Promise<any>;
    customer(loginUserDto: LoginUserDTO): Promise<any>;
}
