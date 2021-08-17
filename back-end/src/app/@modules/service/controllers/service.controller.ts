/*
https://docs.nestjs.com/controllers#controllers
*/
import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateServiceDTO } from './../dtos/create-service.dto';
import { ServiceService } from './../services/service.service';

@ApiTags('Service')
@Controller('service')
export class ServiceController {
  constructor(private serviceService: ServiceService) {}

  @Post('')
  @ApiBody({ type: CreateServiceDTO })
  async create(@Body() createServiceDto: CreateServiceDTO) {
    return this.serviceService.insertIntoDB(createServiceDto);
  }

  @Put(':id')
  @ApiBody({ type: CreateServiceDTO })
  async update(
    @Param('id') id: string,
    @Body() createServiceDto: CreateServiceDTO,
  ) {
    return this.serviceService.updateIntoDB(id.trim(), createServiceDto);
  }
}
