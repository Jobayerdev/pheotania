import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { RolePermissionService } from '../services/role-permission.service';
import { RolePermissionDTO } from './../dtos/role-permission.dtos';

/*
https://docs.nestjs.com/controllers#controllers
*/

@ApiTags('RolePermissions')
@Controller('role-permissions')
export class RolePermissionController {
  constructor(private service: RolePermissionService) {}

  @Post()
  @ApiProperty({ type: RolePermissionDTO })
  create(@Body() rolePermissionDTO: RolePermissionDTO) {
    return this.service.insertIntoDB(rolePermissionDTO);
  }

  @Put(':id')
  @ApiProperty({ type: RolePermissionDTO })
  update(
    @Param('id') id: string,
    @Body() rolePermissionDTO: RolePermissionDTO,
  ) {
    return this.service.updateIntoDB(id, rolePermissionDTO);
  }

  @Delete(':id')
  @ApiProperty({ type: RolePermissionDTO })
  delete(@Param('id') id: string) {
    return this.service.deleteFromDB(id);
  }
}
