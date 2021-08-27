import { ApiProperty } from '@nestjs/swagger';

export class RemoveUserRoleDTO {
  @ApiProperty({ required: true, example: ['roleId1', 'roleId2'] })
  readonly roles: string[];
}
