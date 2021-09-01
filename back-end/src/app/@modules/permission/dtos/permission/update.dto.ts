import { ApiProperty } from '@nestjs/swagger';

export class PermissionUpdateDTO {
  @ApiProperty({ required: false })
  readonly title: string;

  @ApiProperty({ required: false, type: String })
  readonly permissionType: any;
}
