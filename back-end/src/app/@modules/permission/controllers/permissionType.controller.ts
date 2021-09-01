import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreatePermissionTypeDTO } from '../dtos/permissionType/insert.dto';
import { PermissionTypeUpdateDTO } from '../dtos/permissionType/update.dto';
import { PermissionTypeService } from './../services/permissionType.service';

/*
https://docs.nestjs.com/controllers#controllers
*/

@ApiTags('PermissionType')
@Controller('permissionTypes')
export class PermissionTypeController {
  constructor(private readonly service: PermissionTypeService) {}

  @Post()
  @ApiBody({ type: CreatePermissionTypeDTO })
  create(@Body() createPermissionTypeDTO: CreatePermissionTypeDTO) {
    return this.service.insertIntoDB(createPermissionTypeDTO);
  }

  @Put(':id')
  @ApiBody({ type: PermissionTypeUpdateDTO })
  update(
    @Body() createPermissionTypeDTO: PermissionTypeUpdateDTO,
    @Param('id') id: string,
  ) {
    return this.service.updateIntoDB(id, createPermissionTypeDTO);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.service.deleteFromDB(id);
  }
}
