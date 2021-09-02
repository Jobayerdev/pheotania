import { Column, Entity, OneToMany } from 'typeorm';

import { BaseEntity } from '@application/base';
import { Service } from '@modules/service/entities/service.entity';

@Entity('appointments')
export class Appointment extends BaseEntity {
  public static readonly SEARCH_TERMS = [
    'description',
    'name',
    'phoneNumber',
    'email',
    'address',
  ];
  public static readonly ORDERS = [
    'phoneNumber',
    'createdAt',
    'email',
    'schedule',
  ];
  public static readonly RELATIONS = ['services'];

  @OneToMany(() => Service, (service) => service.appointments)
  services?: Service[];

  @Column()
  description?: string;

  @Column()
  schedule?: string;

  @Column()
  name?: string;

  @Column()
  phoneNumber?: string;

  @Column()
  address?: string;

  @Column()
  email?: string;
}
