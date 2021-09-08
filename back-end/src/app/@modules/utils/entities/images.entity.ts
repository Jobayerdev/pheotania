import { Column, Entity } from 'typeorm';

import { BaseEntity } from '@application/base/base.entity';

@Entity('images')
export class Image extends BaseEntity {
  @Column()
  link: string;
}
