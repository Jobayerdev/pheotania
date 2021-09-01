import { ApiProperty } from '@nestjs/swagger';

export class AddUserRoleDTO {
  @ApiProperty({ required: true, example: ['roleId1', 'roleId2'] })
  readonly roles: String[];
}
