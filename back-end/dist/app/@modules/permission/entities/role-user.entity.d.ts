import { BaseEntity } from '@application/base';
import { Role } from './role.entity';
import { User } from '@modules/user/entities/user.entities';
export declare class RoleUser extends BaseEntity {
    role?: Role;
    user?: User;
}
