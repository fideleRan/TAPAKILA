import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, Res } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FileInterceptor, NoFilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { eventInterceptor } from 'src/interceptor/fileInterceptor';
import { Response } from 'express';

@ApiTags('EVENT')
@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post('Info/:IdOrganisateur')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema:{
      type:'object',
      properties:{
        Name:{type:'string'},
        Tag:{type:'string'},
        Cathegory:{type:'string'},
      }
    }
  })
  @UseInterceptors(NoFilesInterceptor())
  create(@Param('IdOrganisateur') IdOrganisateur:string ,@Body() createEventDto: CreateEventDto) {
    return this.eventService.create(+IdOrganisateur ,createEventDto);
  }

  @Get()
  @ApiBearerAuth()
  findAll() {
    return this.eventService.findAll();
  }
                                                                             

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventService.findOne(+id);
  }

  @Patch(':id')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema:{
      type:'object',
      properties:{
        Name:{type:'string'},
        Description:{type:'string'},
        Tag:{type:'string'},
        Cathegory:{type:'string'},
        Date_Debut:{type:'string'},
        Date_Fin:{type:'string'},
        Heure_Debut:{type:'string'},
        Heure_Fin:{type:'string'},
        Status:{type:'string'},
        Photo:{type:'file'},
        Lieu:{type:'number'}
      }
    }
  })
  @UseInterceptors(FileInterceptor(
    'Photo',
    {
      storage:diskStorage({
        destination:"public/photo/event",
        filename:eventInterceptor
      })
    }
  ))
  update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto,
  @UploadedFile() Photo:Express.Multer.File
  ) {
    const dataEvent = {
      ...updateEventDto,
      Photo:Photo.filename
    }
    return this.eventService.update(+id, dataEvent);
  }

  @Patch('Date/:id')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema:{
      type:'object',
      properties:{
        Date_Debut:{type:'string'},
        Date_Fin:{type:'string'},
        Heure_Debut:{type:'string'},
        Heure_Fin:{type:'string'},
      }
    }
  })
  @UseInterceptors(NoFilesInterceptor())
  updateDate(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
    return this.eventService.updateDate(+id, updateEventDto);
  }

  @Patch('Lieu/:id')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema:{
      type:'object',
      properties:{
        Lieu:{type:'number'},
      }
    }
  })
  @UseInterceptors(NoFilesInterceptor())
  updateLieu(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {    
    return this.eventService.updateLieu(+id, updateEventDto);
  }

  @Patch('Description/:id')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema:{
      type:'object',
      properties:{
        Description:{type:'string'},
      }
    }
  })
  @UseInterceptors(NoFilesInterceptor())
  updateDesc(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {    
    return this.eventService.updateDesc(+id, updateEventDto);
  }

  @Patch('Photo/:id')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema:{
      type:'object',
      properties:{
        Photo:{type:'file'},
      }
    }
  })
  @UseInterceptors(FileInterceptor(
    'Photo',
    {
      storage:diskStorage({
        destination:"public/photo/event",
        filename:eventInterceptor
      })
    }
  ))
  updatePhoto(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto,
  @UploadedFile() file:Express.Multer.File
  ) {    
    const data = {
      ...updateEventDto,
      Photo:file.filename
    }
    return this.eventService.updatePhoto(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventService.remove(+id);
  }
}
