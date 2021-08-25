import { ApiProperty } from '@nestjs/swagger';

export class RemoveUserExtendedPermissionDTO {
  @ApiProperty({ required: true, example: ['permissionId1', 'permissionId2'] })
  readonly permissions: String[];
}
