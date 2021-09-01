import { ApiProperty } from '@nestjs/swagger';

export class RolePermissionBulkDeleteDTO {
  @ApiProperty({ required: true, example: ['id1', 'id2'] })
  readonly ids: string[];
}
