import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateServiceDTO {
  @ApiProperty({ required: true, example: 'AC Servicing' })
  @IsString()
  name: string;

  @ApiProperty({
    required: true,
    example: 'https://i.ibb.co/PGkNG58/1619427688-acservicing.jpg',
  })
  @IsString()
  image: string;

  @ApiProperty({
    required: true,
    example: '7 Days service warranty',
  })
  @IsString()
  overview: string;
}
