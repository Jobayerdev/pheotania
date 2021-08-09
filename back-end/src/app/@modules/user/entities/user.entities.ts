import { Column, Entity } from 'typeorm';

import { BaseEntity } from '@application/base/base.entity';
import { IsEmail } from 'class-validator';

@Entity('users')
export class User extends BaseEntity {
  //   public static readonly SEARCH_TERMS = ['PhoneNumber', 'name', 'email'];
  //   public static readonly ORDERS = ['name', 'createdAt'];
  //   public static readonly RELATIONS = [];

  @Column({ unique: true })
  phoneNumber?: string;

  @Column({ select: false })
  password?: string;

  @Column({ nullable: false })
  name?: string;

  @Column({ unique: true })
  @IsEmail()
  email?: string;
}
