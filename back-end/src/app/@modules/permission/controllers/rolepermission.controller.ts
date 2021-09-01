import { PermissionFor } from '@application/decorators/permissionfor.decorator';
import { RequestOptions } from '@application/decorators/requestoptions.decorator';
import { AppPermissionTypes } from '@application/enums';
import {
  IMessageOnlyResponse,
  IOptions,
} from '@application/interfaces/base.interfaces';
import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateRolePermissionDTO } from '../dtos/rolePermission/insert.dto';
import { RolePermissionUpdateDTO } from '../dtos/rolePermission/update.dto';
import { RolePermission } from '../entities/role-premission.entity';
import { RolePermissionService } from '../services/role-permission.service';

/*
https://docs.nestjs.com/controllers#controllers
*/

@ApiTags('RolePermissions')
@Controller('role-permissions')
export class RolePermissionController {
  private static NAME = 'RolePermission';
  constructor(private readonly service: RolePermissionService) {}

  @Post()
  @PermissionFor(`${RolePermissionController.NAME}${AppPermissionTypes.CREATE}`)
  @ApiBody({ type: CreateRolePermissionDTO })
  async insert(
    @RequestOptions() reqOptions: IOptions,
    @Body() reqPayloads: CreateRolePermissionDTO,
  ): Promise<RolePermission> {
    return this.service.insertIntoDB(reqPayloads);
  }

  @Put(':id')
  @PermissionFor(`${RolePermissionController.NAME}${AppPermissionTypes.MODIFY}`)
  async update(
    @Param('id') id: string,
    @Body() reqPayloads: RolePermissionUpdateDTO,
  ): Promise<RolePermission> {
    return this.service.updateIntoDB(id, reqPayloads);
  }

  @Delete(':id')
  @PermissionFor(`${RolePermissionController.NAME}${AppPermissionTypes.DELETE}`)
  async delete(@Param('id') id: string): Promise<IMessageOnlyResponse> {
    return this.service.deleteFromDB(id);
  }
}
