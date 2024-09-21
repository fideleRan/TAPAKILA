import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { OrganisateurService } from './organisateur.service';
import { CreateOrganisateurDto } from './dto/create-organisateur.dto';
import { UpdateOrganisateurDto } from './dto/update-organisateur.dto';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FileInterceptor, NoFilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as bcrypt from 'bcrypt'
import { profileOrgInterceptor } from 'src/interceptor/fileInterceptor';
import { unlink } from 'fs';

@ApiTags('Organisateur')
@Controller('organisateur')
export class OrganisateurController {
  constructor(private readonly organisateurService: OrganisateurService) {}

  @Post('register')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema:{
      type:'object',
      properties:{
        Email:{type:'string'},
        Password:{type:'string'}
      }
    }
  })
  @UseInterceptors(NoFilesInterceptor())
  async register(@Body() createOrganisateurDto: CreateOrganisateurDto) {
    const hashedPassword = await bcrypt.hash(createOrganisateurDto.Password, 12)
    return this.organisateurService.register({...createOrganisateurDto, Password:hashedPassword});
  }

  @Post('login')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema:{
      type:'object',
      properties:{
        Email:{type:'string'},
        Password:{type:'string'}
      }
    }
  })
  @UseInterceptors(NoFilesInterceptor())
  async login(@Body() createOrganisateurDto: CreateOrganisateurDto) {
    return this.organisateurService.login(createOrganisateurDto);
  }

  @Get()
  findAll() {
    return this.organisateurService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.organisateurService.findOne(+id);
  }

  @Patch(':id')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema:{
      type:'object',
      properties:{
        Username:{type:'string', default:'org'},
        Email:{type:'string'},
        Tel:{type:'string'},
        SiteWeb:{type:'string'},
        Profile:{type:'file'}
      }
    }
  })
  @UseInterceptors(FileInterceptor( 
    'Profile',
    {
      storage:diskStorage({
        destination:"public/photo/event",
        filename: profileOrgInterceptor
      })
    }
  ))
  update(@Param('id') id: string, @Body() updateOrganisateurDto: UpdateOrganisateurDto,
  @UploadedFile() Profile:Express.Multer.File
  ) {
    if (Profile) {
      updateOrganisateurDto.Profile=Profile.filename

    } else {
      updateOrganisateurDto.Profile=updateOrganisateurDto.Profile
    }
    return this.organisateurService.update(+id, updateOrganisateurDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.organisateurService.remove(+id);
  }
}
