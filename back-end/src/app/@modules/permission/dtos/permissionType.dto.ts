import { IsNotEmpty, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class PermissionTypeDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true, example: 'UserView' })
  readonly title: string;
}
