import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FavorisService } from './favoris.service';
import { CreateFavorisDto } from './dto/create-favoris.dto';
import { UpdateFavorisDto } from './dto/update-favoris.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('FAVORIS')
@Controller('favoris')
export class FavorisController {
  constructor(private readonly favorisService: FavorisService) {}

  @Post()
  create(@Body() createFavorisDto: CreateFavorisDto) {
    return this.favorisService.create(createFavorisDto);
  }

  @Get()
  findAll() {
    return this.favorisService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.favorisService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFavorisDto: UpdateFavorisDto) {
    return this.favorisService.update(+id, updateFavorisDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.favorisService.remove(+id);
  }
}
