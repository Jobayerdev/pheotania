import { ApiProperty } from '@nestjs/swagger';

export class CreateRolePermissionDTO {
  @ApiProperty({
    required: true,
    type: String,
    example: '3c08eff3-7b5b-463f-afaa-5de378a9a60f',
  })
  readonly role: any;

  @ApiProperty({
    required: true,
    type: String,
    example: '3c08eff3-7b5b-463f-afaa-5de378a9a60f',
  })
  readonly permission: any;
}
