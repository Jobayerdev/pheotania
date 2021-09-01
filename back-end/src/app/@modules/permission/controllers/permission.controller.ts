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
import { AddUserExtendedPermissionDTO } from '../dtos/permission/add-user-permission.dto';
import { GetAllPermissionsDTO } from '../dtos/permission/get-all.dto';
import { GetPermissionByIdDTO } from '../dtos/permission/get-by-id.dto';
import { CreatePermissionDTO } from '../dtos/permission/insert.dto';
import { RemoveUserExtendedPermissionDTO } from '../dtos/permission/remove-user-permission.dto';
import { PermissionUpdateDTO } from '../dtos/permission/update.dto';
import { Permission } from '../entities/permissions.entity';
import { PermissionService } from '../services/permission.service';

@ApiTags('Permissions')
@Controller('permissions')
export class PermissionController {
  private static NAME = 'Permission';

  constructor(private readonly service: PermissionService) {}

  @Get('user-permissions/:userId')
  @PermissionFor(`${PermissionController.NAME}${AppPermissionTypes.VIEW}`)
  async getUserPermissions(@Param('userId') userId: string): Promise<String[]> {
    return this.service.getUserPermissions(userId);
  }

  @Post('user-extended-permissions/:userId')
  @PermissionFor(`${PermissionController.NAME}${AppPermissionTypes.CREATE}`)
  async addUserExtendedPermissions(
    @Param('userId') userId: string,
    @Body() payload: AddUserExtendedPermissionDTO,
  ): Promise<String[]> {
    return this.service.addUserExtendedPermissions(userId, payload);
  }

  @Delete('user-extended-permissions/:userId')
  @PermissionFor(`${PermissionController.NAME}${AppPermissionTypes.DELETE}`)
  async removeUserExtendedPermissions(
    @Param('userId') userId: string,
    @Body() payload: RemoveUserExtendedPermissionDTO,
  ): Promise<String[]> {
    return this.service.removeUserExtendedPermissions(userId, payload);
  }

  @Get()
  @PermissionFor(`${PermissionController.NAME}${AppPermissionTypes.VIEW}`)
  @ApiProperty({ type: GetAllPermissionsDTO })
  async getAll(
    @RequestOptions() reqOptions: IOptions,
    @Query() reqPayloads: GetAllPermissionsDTO,
  ): Promise<IGetAllFromDBResponse<Permission>> {
    return this.service.getAllFromDB(reqPayloads, reqOptions);
  }

  @Get(':id')
  @PermissionFor(`${PermissionController.NAME}${AppPermissionTypes.VIEW}`)
  @ApiProperty({ type: GetPermissionByIdDTO })
  async getById(@Param('id') id: string): Promise<Permission> {
    return this.service.getByIdFromDB(id);
  }

  @Post()
  @PermissionFor(`${PermissionController.NAME}${AppPermissionTypes.CREATE}`)
  @ApiBody({ type: CreatePermissionDTO })
  async insert(
    @RequestOptions() reqOptions: IOptions,
    @Body() reqPayloads: CreatePermissionDTO,
  ): Promise<Permission> {
    return this.service.insertIntoDB(reqPayloads);
  }

  @Put(':id')
  @PermissionFor(`${PermissionController.NAME}${AppPermissionTypes.MODIFY}`)
  async update(
    @Param('id') id: string,
    @Body() reqPayloads: PermissionUpdateDTO,
  ): Promise<Permission> {
    return this.service.updateIntoDB(id, reqPayloads);
  }

  @Delete(':id')
  @PermissionFor(`${PermissionController.NAME}${AppPermissionTypes.DELETE}`)
  async delete(@Param('id') id: string): Promise<IMessageOnlyResponse> {
    return this.service.deleteFromDB(id);
  }
}
