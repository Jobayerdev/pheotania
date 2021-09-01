import { IsNotEmpty, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreatePermissionDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly title: string;

  @ApiProperty({ type: String, required: true })
  @IsString()
  @IsNotEmpty()
  readonly permissionType: any;
}
