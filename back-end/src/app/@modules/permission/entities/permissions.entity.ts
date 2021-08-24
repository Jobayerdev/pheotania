import { Column, Entity, ManyToOne } from 'typeorm';

import { BaseEntity } from '@application/base';
import { PermissionType } from './permissionType.entity';

@Entity('permissions')
export class Permission extends BaseEntity {
  @Column({ unique: true })
  title?: string;

  @ManyToOne((type) => PermissionType)
  permissionType?: PermissionType;
}
