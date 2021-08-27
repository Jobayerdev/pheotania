import { BaseEntity } from '@application/base';
import { Permission } from './permissions.entity';
import { User } from '@modules/user/entities/user.entities';
export declare class UserExtendedPermission extends BaseEntity {
    user?: User;
    permission?: Permission;
    constructor();
}
