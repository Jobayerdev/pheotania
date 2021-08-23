import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { PermissionTypeDTO } from './../dtos/permissionType.dto';
import { PermissionTypeService } from './../services/permissionType.service';

/*
https://docs.nestjs.com/controllers#controllers
*/

@ApiTags('PermissionType')
@Controller('permissionTypes')
export class PermissionTypeController {
  constructor(private readonly service: PermissionTypeService) {}

  @Post()
  @ApiBody({ type: PermissionTypeDTO })
  create(@Body() createPermissionTypeDTO: PermissionTypeDTO) {
    return this.service.insertIntoDB(createPermissionTypeDTO);
  }

  @Put(':id')
  @ApiBody({ type: PermissionTypeDTO })
  update(
    @Body() createPermissionTypeDTO: PermissionTypeDTO,
    @Param('id') id: string,
  ) {
    return this.service.updateIntoDB(id, createPermissionTypeDTO);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.service.deleteFromDB(id);
  }
}
