import { AuthRegisterDTO } from '../dtos/register.dto';
import { AuthRegisterService } from './../services/auth-register.service';
export declare class AuthRegisterController {
    private authRegisterService;
    constructor(authRegisterService: AuthRegisterService);
    register(authRegisterDto: AuthRegisterDTO): Promise<import("../../user/entities/user.entities").User>;
}
