import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, ParseIntPipe, UseGuards, Res, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-fan.dto';
import { UpdateFanDto } from './dto/update-fan.dto';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FileInterceptor, NoFilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { eventInterceptor, profileUserInterceptor } from 'src/interceptor/fileInterceptor';
import { profile } from 'console';
import * as bcrypt from 'bcrypt'
import { JwtGuard } from 'src/Utilities/Guard/jwt.guard';
import { AuthGuard } from 'src/Utilities/Guard/auth.guard';
import { Request, Response } from 'express';

@ApiTags('USER')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

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
  async register(@Body() createFanDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(createFanDto.Password, 12)
    return this.userService.register({...createFanDto, Password:hashedPassword});
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
  async login(@Body() createFanDto: CreateUserDto, @Res({passthrough:true}) response:Response) {
    return this.userService.login(createFanDto,response);
  }
/* 
  @Get('verification')
  verification (@Req() request:Request){
    console.log(request);
    
    return this.userService.verifCookie(request)
  } */

  @Post('logout')
  async logout(@Res({passthrough:true}) response:Response) {
    return this.userService.logout(response);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':email')
  findUserEmail(@Param('email') emailUser: string) {
    return this.userService.findUserEmail(emailUser);
  }

  @Get('id/:id')
  finUserId(@Param('id') idUser: number) {
    console.log(idUser);
    return this.userService.findUserId(+idUser);
  }

  @Patch(':id')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema:{
      type:'object',
      properties:{
        Name:{type:'string',default:'Fidele'},
        Username:{type:'string', default:'fidele'},
        Email:{type:'string'},
        Age:{type:'number'},
        Biography:{type:'string'},
        Facebook:{type:'string'},
        Twitter:{type:'string'},
        Instagram:{type:'string'},
        Profile:{type:'file'}
      }
    }
  })
  @UseInterceptors(FileInterceptor( 
    'Profile',
    {
      storage:diskStorage({
        destination:"public/photo/event",
        filename: profileUserInterceptor
      })
    }
  ))
  update(@Param('id') id: string, @Body() updateFanDto: UpdateFanDto,
  @UploadedFile() Profile:Express.Multer.File
  ) {
    if (Profile) {
      updateFanDto.Profile=Profile.filename
    } else {
      updateFanDto.Profile=updateFanDto.Profile
    }
    
    return this.userService.update(+id, updateFanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
