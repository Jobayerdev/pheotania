import { ApiProperty } from '@nestjs/swagger';

export class RolePermissionBulkUpdateDTO {
  @ApiProperty({ required: true, type: String })
  readonly role: any;

  @ApiProperty({ required: true, type: String })
  readonly permission: any;
}
