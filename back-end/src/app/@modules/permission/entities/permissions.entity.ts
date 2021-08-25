import { Column, Entity, ManyToOne } from 'typeorm';

import { BaseEntity } from '@application/base';
import { PermissionType } from './permissionType.entity';

@Entity('permissions')
export class Permission extends BaseEntity {
  public static readonly SEARCH_TERMS = ['title'];
  public static readonly ORDERS = ['title'];
  public static readonly RELATIONS = ['permissionType'];

  @Column({ unique: true })
  title?: string;

  @ManyToOne((type) => PermissionType)
  permissionType?: PermissionType;
}
