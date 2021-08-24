import { IsNotEmpty, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class RolePermissionDTO {
  @ApiProperty({
    required: true,
    example: '8e6e9d80-3b51-4228-a4ae-ed4044b141f1',
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  role: string;

  @ApiProperty({
    required: true,
    example: '9fec078f-6526-41c2-bfe2-ec3fe23ca559',
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  permission: string;
}
