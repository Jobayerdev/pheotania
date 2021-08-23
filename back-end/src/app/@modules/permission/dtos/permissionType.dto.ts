import { IsNotEmpty, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class PermissionTypeDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true, example: 'Admin User' })
  readonly title: string;
}
