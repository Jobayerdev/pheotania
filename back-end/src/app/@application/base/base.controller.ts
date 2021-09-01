/*
https://docs.nestjs.com/controllers#controllers
*/

import { RequestOptions } from '@application/decorators/requestoptions.decorator';
import {
  IGetAllFromDBResponse,
  IMessageOnlyResponse,
  IOptions,
} from '@application/interfaces/base.interfaces';
import { GetAllUsersDTO } from '@modules/user/dtos';
import { User } from '@modules/user/entities/user.entities';
import { Body, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

export abstract class BaseController<CreateDTO, UpdateDTO> {
  _service: any;

  constructor(private _modelService: any) {
    this._service = this._modelService;
  }

  @Get()
  async getAll(
    @RequestOptions() reqOptions: IOptions,
    @Query() reqPayloads: GetAllUsersDTO,
  ): Promise<IGetAllFromDBResponse<User>> {
    return this._service.getAllFromDB(reqPayloads, reqOptions);
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<User> {
    return this._service.getByIdFromDB(id);
  }

  @Post()
  async insert(
    @RequestOptions() reqOptions: IOptions,
    @Body() reqPayloads: CreateDTO,
  ): Promise<User> {
    return this._service.createUser(reqPayloads);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() reqPayloads: UpdateDTO,
  ): Promise<User> {
    return this._service.updateIntoDB(id, reqPayloads);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<IMessageOnlyResponse> {
    return this._service.deleteFromDB(id);
  }
}
