import { AuthRegisterDTO } from '../dtos/register.dto';
import { UserService } from './../../user/services/user.service';
export declare class AuthRegisterService {
    private useService;
    constructor(useService: UserService);
    authRegister(authRegisterDto: AuthRegisterDTO): Promise<import("../../user/entities/user.entities").User>;
}
