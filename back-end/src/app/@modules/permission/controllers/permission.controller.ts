import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { PermissionService } from '../services/permission.service';
import { PermissionDTO } from './../dtos/permission.dots';

@ApiTags('Permissions')
@Controller('permissions')
export class PermissionController {
  constructor(private permissionService: PermissionService) {}

  @Post()
  @ApiBody({ type: PermissionDTO })
  create(@Body() data: PermissionDTO) {
    return this.permissionService.insertIntoDB(data);
  }
  @Put(':id')
  @ApiBody({ type: PermissionDTO })
  update(@Body() data: PermissionDTO, @Param('id') id: string) {
    return this.permissionService.updateIntoDB(id, data);
  }
  @Delete(':id')
  @ApiBody({ type: PermissionDTO })
  delete(@Param('id') id: string) {
    return this.permissionService.deleteFromDB(id);
  }
}
