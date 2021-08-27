import { Entity, ManyToOne } from 'typeorm';

import { BaseEntity } from '@application/base';
import { Permission } from './permissions.entity';
import { User } from '@modules/user/entities/user.entities';

@Entity('user_extended_permissions')
export class UserExtendedPermission extends BaseEntity {
  @ManyToOne(() => User)
  user?: User;

  @ManyToOne(() => Permission)
  permission?: Permission;

  constructor() {
    super();
  }
}
