import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, Query } from '@nestjs/common';
import { BonCommandeService } from './bon_commande.service';
import { CreateBonCommandeDto } from './dto/create-bon_commande.dto';
import { UpdateBonCommandeDto } from './dto/update-bon_commande.dto';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { NoFilesInterceptor } from '@nestjs/platform-express';

@ApiTags('BON COMMANDE')
@Controller('bon-commande')
export class BonCommandeController {
  constructor(private readonly bonCommandeService: BonCommandeService) {}

  @Post()
  create(@Query('idEvent') idEvent:string,@Query('idUser') idUser:string, @Body() createBonCommandeDto: CreateBonCommandeDto) {
    
    return this.bonCommandeService.create(+idEvent, +idUser, createBonCommandeDto);
  }

  @Get()
  findAll() {
    return this.bonCommandeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bonCommandeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBonCommandeDto: UpdateBonCommandeDto) {
    return this.bonCommandeService.update(+id, updateBonCommandeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bonCommandeService.remove(+id);
  }
}
