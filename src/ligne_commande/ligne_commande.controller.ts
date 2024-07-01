import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseInterceptors } from '@nestjs/common';
import { LigneCommandeService } from './ligne_commande.service';
import { CreateLigneCommandeDto } from './dto/create-ligne_commande.dto';
import { UpdateLigneCommandeDto } from './dto/update-ligne_commande.dto';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { NoFilesInterceptor } from '@nestjs/platform-express';

@ApiTags("LIGNE_COMMANDE")
@Controller('ligne-commande')
export class LigneCommandeController {
  constructor(private readonly ligneCommandeService: LigneCommandeService) {}

  @Post()
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema:{
      type:'object',
      properties:{
        nbBillet:{type:'number'},
      }
    }
  })
  @UseInterceptors(NoFilesInterceptor())
  create(@Query('idBC') idBC:string,@Query('idTypeBillet') idTypeBillet:string,@Body() createLigneCommandeDto: CreateLigneCommandeDto) {
    return this.ligneCommandeService.create(+idBC,+idTypeBillet,createLigneCommandeDto);
  }

  @Get()
  findAll() {
    return this.ligneCommandeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ligneCommandeService.findOne(+id);
  }

  @Patch(':id')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema:{
      type:'object',
      properties:{
        nbBillet:{type:'number'},
      }
    }
  })
  @UseInterceptors(NoFilesInterceptor())
  update(@Param('id') id: string, @Body() updateLigneCommandeDto: UpdateLigneCommandeDto) {
    return this.ligneCommandeService.update(+id, updateLigneCommandeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ligneCommandeService.remove(+id);
  }
}
