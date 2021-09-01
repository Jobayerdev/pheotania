import { Column, Entity, OneToMany } from 'typeorm';

import { BaseEntity } from '@application/base/base.entity';
import { Service } from './service.entity';

@Entity('service_departments')
export class ServiceDepartment extends BaseEntity {
  public static readonly SEARCH_TERMS = ['name'];
  public static readonly ORDERS = ['name', 'createdAt'];
  public static readonly RELATIONS = ['services'];

  @Column()
  name?: string;

  @Column({ nullable: true })
  image?: string;

  @Column()
  slug?: string;

  @Column({ nullable: false, type: 'boolean', default: false })
  isFeatured: boolean;

  @OneToMany(() => Service, (service) => service.department)
  services?: Service[];
}
