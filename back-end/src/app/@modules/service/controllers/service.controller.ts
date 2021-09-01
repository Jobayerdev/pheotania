import { RequestOptions } from '@application/decorators/requestoptions.decorator';
import {
  IGetAllFromDBResponse,
  IMessageOnlyResponse,
  IOptions,
} from '@application/interfaces/base.interfaces';
import { GetAllUsersDTO, GetUserByIdDTO } from '@modules/user/dtos';
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
import { ServiceDTO } from '../dtos/service.dtos';
import { Service } from '../entities/service.entity';
import { GetAllServiceDTO } from './../dtos/service.dtos';
import { ServiceService } from './../services/service.service';

/*
https://docs.nestjs.com/controllers#controllers
*/

@ApiTags('Service')
@Controller('services')
export class ServiceController {
  constructor(private service: ServiceService) {}

  @Get()
  @ApiProperty({ type: GetAllUsersDTO })
  async getAll(
    @RequestOptions() reqOptions: IOptions,
    @Query() reqPayloads: GetAllServiceDTO,
  ): Promise<IGetAllFromDBResponse<Service>> {
    return this.service.getAllFromDB(reqPayloads, reqOptions);
  }

  @Get(':id')
  @ApiProperty({ type: GetUserByIdDTO })
  async getById(@Param('id') id: string): Promise<Service> {
    return this.service.getByIdFromDB(id);
  }

  @Post()
  @ApiBody({ type: ServiceDTO })
  async insert(
    @RequestOptions() reqOptions: IOptions,
    @Body() reqPayloads: ServiceDTO,
  ): Promise<Service> {
    return this.service.insertIntoDB(reqPayloads);
  }

  @Put(':id')
  @ApiBody({ type: ServiceDTO })
  async update(
    @Param('id') id: string,
    @Body() reqPayloads: ServiceDTO,
  ): Promise<Service> {
    return this.service.updateIntoDB(id, reqPayloads);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<IMessageOnlyResponse> {
    return this.service.deleteFromDB(id);
  }
}
