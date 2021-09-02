import { Column, Entity, ManyToOne } from 'typeorm';

import { Appointment } from '@modules/appointment/entities/appointment.entity';
import { BaseEntity } from '@application/base/base.entity';
import { ServiceDepartment } from './service-department.entity';

@Entity('service')
export class Service extends BaseEntity {
  public static readonly SEARCH_TERMS = ['name'];
  public static readonly ORDERS = ['name', 'createdAt'];
  public static readonly RELATIONS = ['department'];

  @Column()
  name?: string;

  @Column()
  image?: string;

  @Column()
  description?: string;

  @Column()
  specification?: string;

  @ManyToOne(
    () => ServiceDepartment,
    (serviceDepartment) => serviceDepartment.services,
  )
  department?: ServiceDepartment;

  @ManyToOne(() => Appointment, (appointment) => appointment.services)
  appointments?: Appointment;
}
