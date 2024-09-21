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

  @Post(":idEvent/:idUser/:idBillet")
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema:{
      type:'object',
      properties:{
        TotalPrice:{type:'number'},
        nbPlace:{type:'number'}
      }
    }
  })
  @UseInterceptors(NoFilesInterceptor())
  create(@Param('idEvent') idEvent:string,@Param('idUser') idUser:string,@Param('idBillet') idBillet:string, @Body() createBonCommandeDto: CreateBonCommandeDto) {
    
    return this.bonCommandeService.create(+idEvent, +idUser,+idBillet, createBonCommandeDto);
  }

  @Get()
  findAll() {
    return this.bonCommandeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bonCommandeService.findOne(+id);
  }

  @Get('user/:id')
  findOneByUser(@Param('id') id: string) {
    return this.bonCommandeService.findOneByUser(+id);
  }

  @Get('event/:id')
  findOneByEvent(@Param('id') id: string) {
    return this.bonCommandeService.findOneByEvent(+id);
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
