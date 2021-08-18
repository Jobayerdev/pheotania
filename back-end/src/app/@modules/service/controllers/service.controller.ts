import { RequestOptions } from '@application/decorators/requestoptions.decorator';
import { IOptions } from '@application/interfaces/base.interfaces';
/*
https://docs.nestjs.com/controllers#controllers
*/
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
import { CreateServiceDTO } from './../dtos/create-service.dto';
import { GetAllServiceDTO } from './../dtos/get-all.dto';
import { ServiceService } from './../services/service.service';

@ApiTags('Service')
@Controller('service')
export class ServiceController {
  constructor(private serviceService: ServiceService) {}

  @Get('filter')
  @ApiProperty({ type: GetAllServiceDTO })
  async getAll(
    @Query() reqPayloads: GetAllServiceDTO,
    @RequestOptions() reqOptions: IOptions,
  ) {
    console.log(reqOptions);
    return this.serviceService.getAllFromDB(reqPayloads);
  }

  @Post('')
  @ApiBody({ type: CreateServiceDTO })
  async create(@Body() createServiceDto: CreateServiceDTO) {
    return this.serviceService.insertIntoDB(createServiceDto);
  }

  @Put(':id')
  @ApiBody({ type: CreateServiceDTO })
  async update(
    @Param('id') id: string,
    @Body() createServiceDto: CreateServiceDTO,
  ) {
    return this.serviceService.updateIntoDB(id.trim(), createServiceDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.serviceService.deleteFromDB(id.trim());
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.serviceService.getByIdFromDB(id.trim());
  }
}
