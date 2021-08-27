/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common';

export abstract class BaseController<CreateDTO, UpdateDTO> {
  _service: any;

  constructor(private _modelService: any) {
    this._service = this._modelService;
  }

  @Post('')
  async create(@Body() createServiceDto: CreateDTO) {
    return this._service.insertIntoDB(createServiceDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() createServiceDto: UpdateDTO) {
    return this._service.updateIntoDB(id.trim(), createServiceDto);
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this._service.getByIdFromDB(id.trim());
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    return this._service.deleteFromDB(id);
  }
}
