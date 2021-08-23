import { Column, Entity } from 'typeorm';

import { BaseEntity } from '@application/base/base.entity';

@Entity('permissionTypes')
export class PermissionType extends BaseEntity {
  public static readonly SEARCH_TERMS = ['title'];
  public static readonly ORDERS = ['title'];
  public static readonly RELATIONS = [];

  @Column({ unique: true })
  title?: string;
}
