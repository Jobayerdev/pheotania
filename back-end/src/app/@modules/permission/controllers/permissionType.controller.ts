import { PermissionFor } from '@application/decorators/permissionfor.decorator';
import { RequestOptions } from '@application/decorators/requestoptions.decorator';
import { AppPermissionTypes } from '@application/enums';
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
import { GetAllPermissionTypesDTO } from '../dtos/permissionType/get-all.dto';
import { GetPermissionTypeByIdDTO } from '../dtos/permissionType/get-by-id.dto';
import { CreatePermissionTypeDTO } from '../dtos/permissionType/insert.dto';
import { PermissionTypeUpdateDTO } from '../dtos/permissionType/update.dto';
import { PermissionType } from '../entities/permissionType.entity';
import { PermissionTypeService } from './../services/permissionType.service';

/*
https://docs.nestjs.com/controllers#controllers
*/

@ApiTags('PermissionType')
@Controller('permission-types')
export class PermissionTypeController {
  private static NAME = 'PermissionType';

  constructor(private readonly service: PermissionTypeService) {}

  @Get()
  @PermissionFor(`${PermissionTypeController.NAME}${AppPermissionTypes.VIEW}`)
  @ApiProperty({ type: GetAllPermissionTypesDTO })
  async getAll(
    @RequestOptions() reqOptions: IOptions,
    @Query() reqPayloads: GetAllPermissionTypesDTO,
  ): Promise<IGetAllFromDBResponse<PermissionType>> {
    return this.service.getAllFromDB(reqPayloads, reqOptions);
  }

  @Get(':id')
  @PermissionFor(`${PermissionTypeController.NAME}${AppPermissionTypes.VIEW}`)
  @ApiProperty({ type: GetPermissionTypeByIdDTO })
  async getById(@Param('id') id: string): Promise<PermissionType> {
    return this.service.getByIdFromDB(id);
  }

  @Post()
  @PermissionFor(`${PermissionTypeController.NAME}${AppPermissionTypes.CREATE}`)
  @ApiBody({ type: CreatePermissionTypeDTO })
  async insert(
    @RequestOptions() reqOptions: IOptions,
    @Body() reqPayloads: CreatePermissionTypeDTO,
  ): Promise<PermissionType> {
    return this.service.insertIntoDB(reqPayloads);
  }

  @Put(':id')
  @PermissionFor(`${PermissionTypeController.NAME}${AppPermissionTypes.MODIFY}`)
  async update(
    @Param('id') id: string,
    @Body() reqPayloads: PermissionTypeUpdateDTO,
  ): Promise<PermissionType> {
    return this.service.updateIntoDB(id, reqPayloads);
  }

  @Delete(':id')
  @PermissionFor(`${PermissionTypeController.NAME}${AppPermissionTypes.DELETE}`)
  async delete(@Param('id') id: string): Promise<IMessageOnlyResponse> {
    return this.service.deleteFromDB(id);
  }
}
