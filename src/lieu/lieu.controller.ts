import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors } from '@nestjs/common';
import { LieuService } from './lieu.service';
import { CreateLieuDto } from './dto/create-lieu.dto';
import { UpdateLieuDto } from './dto/update-lieu.dto';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FileInterceptor, NoFilesInterceptor } from '@nestjs/platform-express';

@ApiTags('LIEU')
@Controller('lieu')
export class LieuController {
  constructor(private readonly lieuService: LieuService) {}

  @Post()
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema:{
      type:'object',
      properties:{
        Name:{type:'string'},
        Description:{type:'string'},
        Adresse:{type:'string'},
        CapaciteMax:{type:'number'},
        Localisation:{type:'string'}
      }
    }
  })
  @UseInterceptors(NoFilesInterceptor())
  create(@Body() createLieuDto: CreateLieuDto) {
    return this.lieuService.create(createLieuDto);
  }

  @Get()
  findAll() {
    return this.lieuService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lieuService.findOne(+id);
  }

  @Patch(':id')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema:{
      type:'object',
      properties:{
        Name:{type:'string'},
        Description:{type:'string'},
        Adresse:{type:'number'},
        CapaciteMax:{type:'string'},
        Localisation:{type:'string'}
      }
    }
  })
  @UseInterceptors(NoFilesInterceptor())
  update(@Param('id') id: string, @Body() updateLieuDto: UpdateLieuDto) {
    return this.lieuService.update(+id, updateLieuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lieuService.remove(+id);
  }
}
