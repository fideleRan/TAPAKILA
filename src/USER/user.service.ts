import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-fan.dto';
import { UpdateFanDto } from './dto/update-fan.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { unlink, unlinkSync } from 'fs';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';
import { Organisateur } from 'src/organisateur/entities/organisateur.entity';
import { OrganisateurService } from 'src/organisateur/organisateur.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)  private fanRepository:Repository<User>,
    @InjectRepository(Organisateur)  private orgRepository:Repository<Organisateur>,
    private orgService : OrganisateurService,
    private jwtService:JwtService
  ){}
  
  //REGISTER
  async register(createFanDto: CreateUserDto) {
    //find email
    
    const verification = await this.fanRepository.findOne({where:{Email:createFanDto.Email}})
    if(verification) throw new BadRequestException("Cette Nom d'utilisateur existe deja")

    //Name random
    let randomName =''
    const character = "abcdefghijklmnopqrstuvwxyz0123456789"
    for (let i = 0; i < 10; i++) {
      const random = Math.floor(Math.random()*character.length)
      randomName+=character.charAt(random)
    }
    
    const user = this.fanRepository.create({
      ...createFanDto,
      Username:randomName
    })
    
    return await this.fanRepository.save(user)
  }

  //LOGIN
  async login(createFanDto: CreateUserDto, response:Response) {
    //Verify email
    const verificationEmailFan = await this.fanRepository.findOne({where:{Email:createFanDto.Email}})
    const verificationEmailorg = await this.orgRepository.findOne({where:{Email:createFanDto.Email}})

    if (verificationEmailFan) {
      //Compare password
      if (!(await bcrypt.compare(createFanDto.Password, verificationEmailFan.Password))) 
      throw new BadRequestException("Mot de passe Incorrecte")

        //Generate JWT 
        const dataUserF = verificationEmailFan
        delete dataUserF.Password
        const token = await this.generateToken({...dataUserF})

        //Stocker le tokken dans '_auth' cookie 
        //response.cookie('_auth',token,{httpOnly:true} )
        return {
          token:token,
          role:'FAN',
          message:"Authentification avec succes"
      }

    } else if (verificationEmailorg) {
      //Compare password
      if (!(await bcrypt.compare(createFanDto.Password, verificationEmailorg.Password))) 
        throw new BadRequestException("Mot de passe Incorrecte")

        //Generate JWT 
        const dataUserO = verificationEmailorg
        delete dataUserO.Password
        const token = await this.generateToken({...dataUserO})
    
        return {
          token:token,
          role:'ORGANISATEUR',
          message:"Organisateur authentifié avec succes"
      }
    } else if (!verificationEmailFan || !verificationEmailorg){
      throw new BadRequestException("Adresse email incorrecte")
    }    
  }

  //VERIFICATION COOKIES
 /*  async verifCookie(request:Request){
    try {            
      const cookie = request.cookies['_auth']
      console.log(request.cookies);
      
      if(!cookie) throw new UnauthorizedException('User unauthorised')
      const dataCookies = await this.jwtService.verifyAsync(cookie)  
      if(!dataCookies) throw new UnauthorizedException('Cookies User not found')
      
      console.log(dataCookies.dataUser["id"]);
      const idUser : number= dataCookies.dataUser["id"]
      
      const user = await this.fanRepository.findOneBy({id:idUser})
      delete user.Password
      //console.log(user);
      
      return user

    } catch (error) {
        throw new UnauthorizedException()
    }
  } */

  //LOGOUT
  async logout(response:Response){
    //response.clearCookie('jwt')
    response.clearCookie('_auth')
    return {message:'Logout successful'}
  }


  findAll() {
    return this.fanRepository.find();
  }

  async findUserEmail(emailUser:string) {
    try {
      return await this.fanRepository.findOneBy({Email:emailUser})
    } catch (error) {
      throw new NotFoundException("User not found")
    }
  }

  async findUserId(idUser:number) {
    try {
      return await this.fanRepository.findOneBy({id:idUser})
    } catch (error) {
      throw new NotFoundException("User not found")
    }
  }

  async update(id: number, updateFanDto: UpdateFanDto) {
    const fan = await this.fanRepository.findOne({where:{id}})
    if(!fan) throw new NotFoundException('Fan non trouvé')
    
    if(isNaN(updateFanDto.Age)) throw new BadRequestException('Age invalide')
    
    const dataUpdate = await this.fanRepository.create({
      ...updateFanDto,
      Password:fan.Password
    })
    console.log(dataUpdate);
    
    await this.fanRepository.update(id,dataUpdate);
    return {message:"Mise à jours effectuée"}
    //return dataUpdate
  }

  async remove(id: number) {
    try {
      const fan = await this.fanRepository.findOne({where:{id}})
      if(!fan) throw new NotFoundException('Fan non trouvé')

      if (fan.Profile){
        unlinkSync(`public/photo/profileUser/${fan.Profile}`)
      }


      return await this.fanRepository.delete(id);

    } catch (error) {
      throw new BadRequestException("suppression echoué", error)
    }
  }

  async generateToken(dataUser:any){
    return this.jwtService.sign({dataUser})
  }
}
