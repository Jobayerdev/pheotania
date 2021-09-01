import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePermissionDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly title: string;

  @ApiProperty({ type: String, required: false })
  readonly permissionType: any;
}
