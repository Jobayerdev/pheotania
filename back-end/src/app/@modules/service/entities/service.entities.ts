import { Column, Entity } from 'typeorm';

import { BaseEntity } from '@application/base/base.entity';

@Entity('service')
export class Service extends BaseEntity {
  public static readonly SEARCH_TERMS = ['name', 'image'];
  public static readonly ORDERS = ['name', 'createdAt'];
  public static readonly RELATIONS = [];

  @Column()
  name?: string;

  @Column()
  image?: string;

  @Column()
  overview?: string;
}
