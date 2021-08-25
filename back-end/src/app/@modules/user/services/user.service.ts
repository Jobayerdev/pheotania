/*
https://docs.nestjs.com/providers#services
*/
import { BaseService } from '@application/base';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entities';

@Injectable()
export class UserService extends BaseService<User> {
  constructor(
    @InjectRepository(User)
    private readonly service: Repository<User>,
  ) {
    super(service, User.name);
  }
  async checkIfUserExist(phoneNumber: string): Promise<User | unknown> {
    try {
      const isUserExist = await this.getByCriteriaFromDB(
        { phoneNumber },
        {
          single: true,
          selects: ['id', 'phoneNumber', 'name', 'password'],
        },
      );

      if (isUserExist) {
        return isUserExist;
      }
      return false;
    } catch (error) {
      return error;
    }
  }
}
