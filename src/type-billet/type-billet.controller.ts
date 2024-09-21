import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, Query } from '@nestjs/common';
import { TypeBilletService } from './type-billet.service';
import { CreateTypeBilletDto } from './dto/create-type-billet.dto';
import { UpdateTypeBilletDto } from './dto/update-type-billet.dto';
import { Entity } from 'typeorm';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { NoFilesInterceptor } from '@nestjs/platform-express';

@ApiTags('TYPE-BILLET')
@Controller('type-billet')
export class TypeBilletController {
  constructor(private readonly typeBilletService: TypeBilletService) {}

  @Post(':idEvent')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema:{
      type:'object',
      properties:{
        Name:{type:'string'},
        Price:{type:'number'},
        nbTotal:{type:'number'},
      }
    }
  })
  @UseInterceptors(NoFilesInterceptor())
  create(@Param('idEvent') idEvent :string,@Body() createTypeBilletDto: CreateTypeBilletDto) {
    return this.typeBilletService.create(+idEvent,createTypeBilletDto);
  }


  @Get(':idEvent')
  findOne(@Param('idEvent') id: string) {
    return this.typeBilletService.findOne(+id);
  }

  @Get('/billet/:idBillet')
  findOneBillet(@Param('idBillet') id: string) {
    return this.typeBilletService.findOneBillet(+id);
  }


  @Patch('updateNbBillet/:id')
  update(@Param('id') id: string, @Body() updateTypeBilletDto: UpdateTypeBilletDto) {
    return this.typeBilletService.update(+id, updateTypeBilletDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeBilletService.remove(+id);
  }
}
