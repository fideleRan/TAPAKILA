import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors } from '@nestjs/common';
import { PaiementService } from './paiement.service';
import { CreatePaiementDto } from './dto/create-paiement.dto';
import { UpdatePaiementDto } from './dto/update-paiement.dto';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { NoFilesInterceptor } from '@nestjs/platform-express';

@ApiTags('PAIEMENT')
@Controller('paiement')
export class PaiementController {
  constructor(private readonly paiementService: PaiementService) {}

  @Post('/:idBC')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema:{
      type:'object',
      properties:{
        Mode:{type:'string'},
        QRcode:{type:'string'}
      }
    }
  })
  @UseInterceptors(NoFilesInterceptor())
  create(@Param('idBC') idBC:string,@Body() createPaiementDto: CreatePaiementDto) {
    return this.paiementService.create(+idBC,createPaiementDto);
  }

  @Get()
  findAll() {
    return this.paiementService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paiementService.findOne(+id);
  }

  @Get('/user/:idUser')
  findOneUser(@Param('id') id: string) {
    return this.paiementService.findOneUser(+id);
  }

  @Patch(':id')
  @UseInterceptors(NoFilesInterceptor())
  update(@Param('id') id: string, @Body() updatePaiementDto: UpdatePaiementDto) {
    return this.paiementService.update(+id, updatePaiementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paiementService.remove(+id);
  }
}
