import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class AuthRegisterDTO {
  @ApiProperty({ required: true, example: 'Jobayer Hossain' })
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({ required: true, example: '0185375354' })
  @IsNotEmpty()
  readonly phoneNumber: string;

  @ApiProperty({ required: true, example: '123456' })
  @IsNotEmpty()
  readonly password: string;
}
