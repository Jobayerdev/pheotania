import { Column, Entity } from 'typeorm';

import { BaseEntity } from '@application/base/base.entity';

@Entity('roles')
export class Role extends BaseEntity {
  public static readonly SEARCH_TERMS = ['title'];
  public static readonly ORDERS = ['title'];
  public static readonly RELATIONS = [];

  @Column({ unique: true })
  title?: string;
}
