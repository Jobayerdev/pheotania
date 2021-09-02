/*
https://docs.nestjs.com/providers#services
*/
import { BaseService } from '@application/base';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDTO } from '../dtos';
import { User } from '../entities/user.entities';
import { UserType } from '../enums';

@Injectable()
export class UserService extends BaseService<User> {
  constructor(
    @InjectRepository(User)
    private readonly service: Repository<User>,
  ) {
    super(service, User.name);
  }
  async checkIfUserExist(
    phoneNumber: string,
    type: UserType,
  ): Promise<User | unknown> {
    try {
      const isUserExist = await this.getByCriteriaFromDB(
        { phoneNumber, type },
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

  async createUser(user: CreateUserDTO) {
    try {
      const find = await this.getByCriteriaFromDB(
        {
          phoneNumber: user.phoneNumber,
          type: user.type,
        },
        {},
      );
      if (find) {
        throw new Error('User Already exist');
      }
      return await this.insertIntoDB(user);
    } catch (error) {
      return error;
    }
  }
}
