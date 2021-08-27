import { LoginUserDTO } from '../dtos/login-user.dto';
import { AuthLoginService } from './../services/auth-login.service';
export declare class AuthLoginController {
    private authLoginService;
    constructor(authLoginService: AuthLoginService);
    login(loginUserDto: LoginUserDTO): Promise<any>;
}
