import { ApiProperty } from '@nestjs/swagger';

export class PermissionTypeUpdateDTO {
  @ApiProperty({ required: false })
  readonly title: string;
}
