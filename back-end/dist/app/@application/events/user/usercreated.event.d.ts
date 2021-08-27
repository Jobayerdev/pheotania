import { RoleService } from '@modules/permission/services/role.service';
import { RoleUserService } from '@modules/permission/services/role-user.service';
export declare class UserCreatedEvent {
    private readonly roleService;
    private readonly roleUserService;
    constructor(roleService: RoleService, roleUserService: RoleUserService);
    handleUserCreatedEvent(user: any): Promise<void>;
}
