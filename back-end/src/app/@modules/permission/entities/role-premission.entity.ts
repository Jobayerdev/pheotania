import { Entity, ManyToOne } from 'typeorm';

import { BaseEntity } from '@application/base';
import { Permission } from './permissions.entity';
import { Role } from './role.entity';

@Entity('role-permissions')
export class RolePermission extends BaseEntity {
  @ManyToOne(() => Role)
  role?: Role | unknown;

  @ManyToOne(() => Permission)
  permission?: Permission;
}
