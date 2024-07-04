import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrganisateurDto } from './dto/create-organisateur.dto';
import { UpdateOrganisateurDto } from './dto/update-organisateur.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Organisateur } from './entities/organisateur.entity';
import { unlinkSync } from 'fs';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class OrganisateurService {
  constructor (
    @InjectRepository(Organisateur) private orgRepo:Repository<Organisateur>,
    private jwtService:JwtService
  ){}

  //REGISTER
  async register(createOrganisateurDto: CreateOrganisateurDto) {
    const verification = await this.orgRepo.findOne({where:{Email:createOrganisateurDto.Email}})
    if(verification) throw new BadRequestException("Cette Nom d'utilisateur existe deja")
    
    //Name random
    let randomName =''
    const character = "abcdefghijklmnopqrstuvwxyz0123456789"
    for (let i = 0; i < 10; i++) {
      const random = Math.floor(Math.random()*character.length)
      randomName+=character.charAt(random)
    }

    const organisateur = this.orgRepo.create({
      ...createOrganisateurDto,
      Username:randomName
    })

    return await this.orgRepo.save(organisateur)
  }

  
  //LOGIN
  async login(createOrganisateurDto:CreateOrganisateurDto){
    //Verify email
    const verificationEmail = await this.orgRepo.findOne({where:{Email:createOrganisateurDto.Email}})
    if(!verificationEmail) throw new BadRequestException("Email incorrecte")
    
    //Compare password
    if (!(await bcrypt.compare(createOrganisateurDto.Password, verificationEmail.Password))) throw new BadRequestException("Mot de passe Incorrecte")

    //Generate JWT 
    const dataUser = verificationEmail
    delete dataUser.Password
    const token = await this.jwtService.sign({...dataUser})

    return {
      token:token,
      message:"Organisateur authentifié avec succes"
    }
  }

  findAll() {
    return this.orgRepo.find();
  }

  async findOne(id: number) {
    try {
      return await this.orgRepo.findOneBy({id})
    } catch (error) {
      throw new NotFoundException("Cette organisateur n'existe pas")
    }
  }

  async update(id: number, updateOrganisateurDto: UpdateOrganisateurDto) {
    const org = await this.orgRepo.findOneBy({id})
    if(!org) throw new NotFoundException("Cette organisateur n'existe pas")

    const dataOrg = this.orgRepo.create(updateOrganisateurDto)
    await this.orgRepo.update(id,dataOrg);

    return {message:"Mise à jours effectuée"}
  }

  async remove(id: number) {
    try {
      const fan = await this.orgRepo.findOne({where:{id}})
      if(!fan) throw new NotFoundException('Fan non trouvé')

      if (fan.Profile){
        unlinkSync(`public/photo/profileOrg/${fan.Profile}`)
      }


      return await this.orgRepo.delete(id);

    } catch (error) {
      throw new BadRequestException("suppression echoué", error)
    }
  }
}
