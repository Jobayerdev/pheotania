/*
https://docs.nestjs.com/controllers#controllers
*/
import { RequestOptions } from '@application/decorators/requestoptions.decorator';
import {
  IGetAllFromDBResponse,
  IMessageOnlyResponse,
  IOptions,
} from '@application/interfaces/base.interfaces';
import { GetAllUsersDTO, GetUserByIdDTO } from '@modules/user/dtos/index';
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
import {
  DepartmentDTO,
  GetAllDepartmentDTO,
} from '../dtos/service-department.dtos';
import { ServiceDepartment } from '../entities/service-department.entity';
import { ServiceDepartmentService } from './../services/service-department.service';

@ApiTags('ServiceDepartment')
@Controller('serviceDepartments')
export class ServiceDepartmentController {
  constructor(private service: ServiceDepartmentService) {}

  @Get()
  @ApiProperty({ type: GetAllUsersDTO })
  async getAll(
    @RequestOptions() reqOptions: IOptions,
    @Query() reqPayloads: GetAllDepartmentDTO,
  ): Promise<IGetAllFromDBResponse<ServiceDepartment>> {
    return this.service.getAllFromDB(reqPayloads, reqOptions);
  }

  @Get(':id')
  @ApiProperty({ type: GetUserByIdDTO })
  async getById(@Param('id') id: string): Promise<ServiceDepartment> {
    return this.service.getByIdFromDB(id);
  }

  @Post()
  @ApiBody({ type: DepartmentDTO })
  async insert(
    @RequestOptions() reqOptions: IOptions,
    @Body() reqPayloads: DepartmentDTO,
  ): Promise<ServiceDepartment> {
    return this.service.insertIntoDB(reqPayloads);
  }

  @Put(':id')
  @ApiBody({ type: DepartmentDTO })
  async update(
    @Param('id') id: string,
    @Body() reqPayloads: DepartmentDTO,
  ): Promise<ServiceDepartment> {
    return this.service.updateIntoDB(id, reqPayloads);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<IMessageOnlyResponse> {
    return this.service.deleteFromDB(id);
  }
}
