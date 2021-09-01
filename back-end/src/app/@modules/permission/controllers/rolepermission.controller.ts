import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { CreateRolePermissionDTO } from '../dtos/rolePermission/insert.dto';
import { RolePermissionUpdateDTO } from '../dtos/rolePermission/update.dto';
import { RolePermissionService } from '../services/role-permission.service';

/*
https://docs.nestjs.com/controllers#controllers
*/

@ApiTags('RolePermissions')
@Controller('role-permissions')
export class RolePermissionController {
  constructor(private service: RolePermissionService) {}

  @Post()
  @ApiProperty({ type: CreateRolePermissionDTO })
  create(@Body() rolePermissionDTO: CreateRolePermissionDTO) {
    return this.service.insertIntoDB(rolePermissionDTO);
  }

  @Put(':id')
  @ApiProperty({ type: RolePermissionUpdateDTO })
  update(
    @Param('id') id: string,
    @Body() rolePermissionDTO: RolePermissionUpdateDTO,
  ) {
    return this.service.updateIntoDB(id, rolePermissionDTO);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.service.deleteFromDB(id);
  }
}
