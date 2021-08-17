import { Column, Entity } from 'typeorm';

import { BaseEntity } from '@application/base/base.entity';

@Entity('service')
export class Service extends BaseEntity {
  @Column()
  name: string;

  @Column()
  image: string;

  @Column()
  overview: string;
}
