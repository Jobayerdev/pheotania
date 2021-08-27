import { ApiProperty } from '@nestjs/swagger';

export class AddUserExtendedPermissionDTO {
  @ApiProperty({ required: true, example: ['permissionId1', 'permissionId2'] })
  readonly permissions: string[];
}
