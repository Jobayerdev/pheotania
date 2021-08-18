/*
https://docs.nestjs.com/providers#services
*/
import { BcryptHelper } from '@application/helpers/bcrypt.helper';
import { JWTHelper } from '@application/helpers/jwt.helper';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDTO } from '../dtos/createUser.dto';
import { UserRepository } from './../repositories/user.repository';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
    private readonly jwtHelper: JWTHelper,
    private bcryptHelper: BcryptHelper,
  ) {}

  async create(createUserDto: CreateUserDTO) {
    const { password, name, phoneNumber } = createUserDto;
    try {
      const hashPassword = await this.bcryptHelper.hashString(password);
      const result = await this.userRepository.insert({
        password: hashPassword,
        name,
        phoneNumber,
      });
      const payload = await this.userRepository.findOne(
        result.identifiers[0].id,
      );
      const accessToken = await this.jwtHelper.makeAccessToken(payload);
      return {
        auth: true,
        token: accessToken,
      };
    } catch (err) {
      if (err.code === '23505') {
        return 'UserAlreadyExistError';
      } else {
        return 'UserRegisterFailedError';
      }
    }
  }

  async findByPhoneNumber(phoneNumber: string) {
    try {
      return this.userRepository.findOne(
        { phoneNumber },
        { select: ['phoneNumber', 'password'] },
      );
    } catch (error) {
      throw new Error(error);
    }
  }
}
