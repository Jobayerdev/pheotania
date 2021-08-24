import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { RoleDTO } from '../dtos/role.dto';
import { RoleService } from './../services/role.service';

/*
https://docs.nestjs.com/controllers#controllers
*/

@ApiTags('Role')
@Controller('roles')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Get('filter')
  filter() {
    return this.roleService.filter();
  }

  @Post()
  @ApiBody({ type: RoleDTO })
  create(@Body() createRoleDTO: RoleDTO) {
    return this.roleService.insertIntoDB(createRoleDTO);
  }

  @Put(':id')
  @ApiBody({ type: RoleDTO })
  update(@Body() createRoleDTO: RoleDTO, @Param('id') id: string) {
    console.log(createRoleDTO);
    return this.roleService.updateIntoDB(id, createRoleDTO);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.roleService.deleteFromDB(id);
  }
}
