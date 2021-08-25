import { RequestOptions } from '@application/decorators/requestoptions.decorator';
import { IOptions } from '@application/interfaces/base.interfaces';
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
import { AddUserExtendedPermissionDTO } from '../dtos/add-user-permission.dto';
import { RemoveUserExtendedPermissionDTO } from '../dtos/remove-user-permission.dto';
import { PermissionService } from '../services/permission.service';
import { GetAllPermissionsDTO, PermissionDTO } from './../dtos/permission.dots';

@ApiTags('Permissions')
@Controller('permissions')
export class PermissionController {
  constructor(private service: PermissionService) {}

  @Get('user-permissions/:userId')
  async getUserPermission(@Param('userId') userId: string): Promise<string[]> {
    return this.service.getUserPermissions(userId);
  }

  @Get()
  @ApiProperty({ type: GetAllPermissionsDTO })
  get(
    @RequestOptions() reqOptions: IOptions,
    @Query() reqPayload: GetAllPermissionsDTO,
  ) {
    return this.service.getAllFromDB(reqPayload, reqOptions);
  }

  @Post()
  @ApiBody({ type: PermissionDTO })
  create(@Body() data: PermissionDTO) {
    return this.service.insertIntoDB(data);
  }

  @Put(':id')
  @ApiBody({ type: PermissionDTO })
  update(@Body() data: PermissionDTO, @Param('id') id: string) {
    return this.service.updateIntoDB(id, data);
  }

  @Delete(':id')
  @ApiBody({ type: PermissionDTO })
  delete(@Param('id') id: string) {
    return this.service.deleteFromDB(id);
  }

  @Post('user-extended-permissions/:userId')
  async addUserExtendedPermissions(
    @Param('userId') userId: string,
    @Body() payload: AddUserExtendedPermissionDTO,
  ): Promise<string[]> {
    return this.service.addUserExtendedPermissions(userId, payload);
  }

  @Delete('user-extended-permissions/:userId')
  async removeUserExtendedPermissions(
    @Param('userId') userId: string,
    @Body() payload: RemoveUserExtendedPermissionDTO,
  ): Promise<string[]> {
    return this.service.removeUserExtendedPermissions(userId, payload);
  }
}
