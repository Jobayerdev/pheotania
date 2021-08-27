import { Entity, ManyToOne } from 'typeorm';

import { BaseEntity } from '@application/base';
import { Role } from './role.entity';
import { User } from '@modules/user/entities/user.entities';

@Entity('role_users')
export class RoleUser extends BaseEntity {
  @ManyToOne(() => Role)
  role?: Role;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  user?: User;
}
