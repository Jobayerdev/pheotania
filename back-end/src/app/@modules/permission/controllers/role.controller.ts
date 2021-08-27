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
import { AddUserRoleDTO } from '../dtos/add-user-role.dto';
import { RemoveUserRoleDTO } from '../dtos/remove-user-role.dto';
import { RoleDTO } from '../dtos/role.dto';
import { RoleService } from './../services/role.service';

/*
https://docs.nestjs.com/controllers#controllers
*/

@ApiTags('Role')
@Controller('roles')
export class RoleController {
  constructor(private readonly service: RoleService) {}

  @Get('user-roles/:userId')
  async getUserRoles(@Param('userId') userId: string): Promise<string[]> {
    return this.service.getUserRoles(userId);
  }

  @Post('user-roles/:userId')
  async addUserRoles(
    @Param('userId') userId: string,
    @Body() payload: AddUserRoleDTO,
  ): Promise<string[]> {
    return this.service.addUserRoles(userId, payload);
  }

  @Post()
  @ApiBody({ type: RoleDTO })
  create(@Body() createRoleDTO: RoleDTO) {
    return this.service.insertIntoDB(createRoleDTO);
  }

  @Delete('user-roles/:userId')
  async removeUserRoles(
    @Param('userId') userId: string,
    @Body() payload: RemoveUserRoleDTO,
  ): Promise<string[]> {
    return this.service.removeUserRoles(userId, payload);
  }

  @Put(':id')
  @ApiBody({ type: RoleDTO })
  update(@Body() createRoleDTO: RoleDTO, @Param('id') id: string) {
    return this.service.updateIntoDB(id, createRoleDTO);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.service.deleteFromDB(id);
  }
}
