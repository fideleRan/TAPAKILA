import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors } from '@nestjs/common';
import { CommentaireService } from './commentaire.service';
import { CreateCommentaireDto } from './dto/create-commentaire.dto';
import { UpdateCommentaireDto } from './dto/update-commentaire.dto';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { NoFilesInterceptor } from '@nestjs/platform-express';

@ApiTags('COMMENTAIRE')
@Controller('commentaire')
export class CommentaireController {
  constructor(private readonly commentaireService: CommentaireService) {}

  @Post('/:idEvent/:idUser')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema:{
      type:'object',
      properties:{
        Message:{type:'string'},
      }
    }
  })
  @UseInterceptors(NoFilesInterceptor())
  create(@Param('idEvent') idEvent:string,@Param('idUser') idUser:string,@Body() createCommentaireDto: CreateCommentaireDto) {
    return this.commentaireService.create(+idEvent,+idUser,createCommentaireDto);
  }

  @Get()
  findAll() {
    return this.commentaireService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentaireService.findOne(+id);
  }

  @Patch(':id')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema:{
      type:'object',
      properties:{
        Message:{type:'string'},
      }
    }
  })
  @UseInterceptors(NoFilesInterceptor())
  update(@Param('id') id: string, @Body() updateCommentaireDto: UpdateCommentaireDto) {
    return this.commentaireService.update(+id, updateCommentaireDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commentaireService.remove(+id);
  }
}
