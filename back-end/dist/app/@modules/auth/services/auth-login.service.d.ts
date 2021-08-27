import { BcryptHelper, JWTHelper } from '@application/helpers';
import { LoginUserDTO } from '../dtos/login-user.dto';
import { UserService } from './../../user/services/user.service';
export declare class AuthLoginService {
    private userService;
    private readonly jwtHelper;
    private bcryptHelper;
    constructor(userService: UserService, jwtHelper: JWTHelper, bcryptHelper: BcryptHelper);
    loginUser(payload: LoginUserDTO): Promise<any>;
}
