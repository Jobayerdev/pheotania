import { ApiProperty } from '@nestjs/swagger';

export class PermissionBulkUpdateDTO {
  @ApiProperty({ required: true, example: ['id1', 'id2'] })
  readonly ids: string[];

  @ApiProperty({ required: false })
  readonly title: string;

  @ApiProperty({ required: false, type: String })
  readonly permissionType: any;
}
