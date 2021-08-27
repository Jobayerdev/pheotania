import { CreateUserDTO } from './../dtos/createUser.dto';
import { UserService } from './../services/user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDTO): Promise<import("../entities/user.entities").User>;
}
