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
import { AddUserRoleDTO } from '../dtos/role/add-user-role.dto';
import { CreateRoleDTO } from '../dtos/role/insert.dto';
import { RemoveUserRoleDTO } from '../dtos/role/remove-user-role.dto';
import { RoleUpdateDTO } from '../dtos/role/update.dto';
import { RequestOptions } from './../../../@application/decorators/requestoptions.decorator';
import { GetAllRolesDTO } from './../dtos/role/get-all.dto';
import { RoleService } from './../services/role.service';

/*
https://docs.nestjs.com/controllers#controllers
*/

@ApiTags('Role')
@Controller('roles')
export class RoleController {
  constructor(private readonly service: RoleService) {}

  @Get()
  @ApiProperty({ example: GetAllRolesDTO })
  async getAll(
    @RequestOptions() reqOptions: IOptions,
    @Query() reqPayloads: GetAllRolesDTO,
  ) {
    return this.service.getAllFromDB(reqPayloads, reqOptions);
  }

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
  @ApiBody({ type: CreateRoleDTO })
  create(@Body() createRoleDTO: CreateRoleDTO) {
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
  @ApiBody({ type: RoleUpdateDTO })
  update(@Body() createRoleDTO: RoleUpdateDTO, @Param('id') id: string) {
    return this.service.updateIntoDB(id, createRoleDTO);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.service.deleteFromDB(id);
  }
}
