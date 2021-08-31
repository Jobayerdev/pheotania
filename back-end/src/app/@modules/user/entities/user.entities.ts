import { Column, Entity } from 'typeorm';

import { BaseEntity } from '@application/base/base.entity';
import { IsEmail } from 'class-validator';

@Entity('users')
export class User extends BaseEntity {
  public static readonly SEARCH_TERMS = [
    'phoneNumber',
    'name',
    'email',
    'type',
    'gender',
    'address',
  ];
  public static readonly ORDERS = ['name', 'createdAt'];
  public static readonly RELATIONS = [];

  @Column({ unique: false })
  phoneNumber?: string;

  @Column({ select: false })
  password?: string;

  @Column({ nullable: true })
  name?: string;

  @Column({ nullable: true, comment: 'CUSTOMER/ADMIN' })
  type?: string;

  @Column({ unique: false, nullable: true })
  @IsEmail()
  email?: string;

  @Column({ nullable: true })
  gender?: string;

  @Column({ nullable: true })
  address?: string;

  @Column({ nullable: true })
  image?: string;
}
