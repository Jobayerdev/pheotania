import { Entity, ManyToOne } from 'typeorm';

import { BaseEntity } from '@application/base';
import { Permission } from './permissions.entity';
import { Role } from './role.entity';

@Entity('rol-permissions')
export class RolePermission extends BaseEntity {
  @ManyToOne(() => Role)
  role?: Role | unknown;

  @ManyToOne(() => Permission)
  permissions?: Permission;
}
