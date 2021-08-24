import { IsNotEmpty, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class PermissionDTO {
  @ApiProperty({ required: true, example: 'string' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    required: true,
    example: '7cd3dc24-d6b9-41a5-9829-1275f48d5dca',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  permissionType: any;
}
