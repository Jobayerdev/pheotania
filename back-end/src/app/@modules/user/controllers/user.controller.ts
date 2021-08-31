import { RequestOptions } from '@application/decorators/requestoptions.decorator';
import {
  IGetAllFromDBResponse,
  IMessageOnlyResponse,
  IOptions,
} from '@application/interfaces/base.interfaces';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiBody, ApiProperty, ApiTags } from '@nestjs/swagger';
import { User } from '../entities/user.entities';
import {
  CreateUserDTO,
  GetAllUsersDTO,
  GetUserByIdDTO,
  UserUpdateDTO,
} from './../dtos/index';
import { UserService } from './../services/user.service';

@ApiTags('User')
@Controller('users')
export class UserController {
  private static NAME = 'User';
  constructor(private readonly service: UserService) {}

  @Get()
  @ApiProperty({ type: GetAllUsersDTO })
  async getAll(
    @RequestOptions() reqOptions: IOptions,
    @Query() reqPayloads: GetAllUsersDTO,
  ): Promise<IGetAllFromDBResponse<User>> {
    return this.service.getAllFromDB(reqPayloads, reqOptions);
  }

  @Get(':id')
  @ApiProperty({ type: GetUserByIdDTO })
  async getById(@Param('id') id: string): Promise<User> {
    return this.service.getByIdFromDB(id);
  }

  @Post()
  @ApiBody({ type: CreateUserDTO })
  async insert(
    @RequestOptions() reqOptions: IOptions,
    @Body() reqPayloads: CreateUserDTO,
  ): Promise<User> {
    return this.service.createUser(reqPayloads);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() reqPayloads: UserUpdateDTO,
  ): Promise<User> {
    return this.service.updateIntoDB(id, reqPayloads);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<IMessageOnlyResponse> {
    return this.service.deleteFromDB(id);
  }
}
