import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateLieuDto } from './dto/create-lieu.dto';
import { UpdateLieuDto } from './dto/update-lieu.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Lieu } from './entities/lieu.entity';
import { Repository } from 'typeorm';
import { find } from 'rxjs';

@Injectable()
export class LieuService {
  constructor(
    @InjectRepository(Lieu) private lieuRep : Repository<Lieu>
  ){}
  async create(createLieuDto: CreateLieuDto) {
    console.log(createLieuDto);
    
    const findMap = await this.lieuRep.findOne({where:{Name:createLieuDto.Name, Adresse:createLieuDto.Adresse}})
    if(!findMap) {
      return await this.lieuRep.save(createLieuDto);
    }else{
      throw new BadRequestException("Cette lieu existe dejat")
    }
  }

  findAll() {
    return this.lieuRep.find();
  }

  async findOne(id: number) {
    try {
      return await this.lieuRep.findOne({where:{id}})
    } catch (error) {
      throw new NotFoundException("lieu non identifier")
    }
  }

  async update(id: number, updateLieuDto: UpdateLieuDto) {
    
    const findMap = await this.lieuRep.findOne({where:{id}})
    if(!findMap)  throw new NotFoundException("Cette Lieu n'existe pas")
    return await this.lieuRep.update(id, updateLieuDto);
  }

  remove(id: number) {
    const findMap = this.lieuRep.findOne({where:{id}})
    if(!findMap)  throw new NotFoundException("Cette Lieu n'existe pas")
    return this.lieuRep.delete(id);
  }
}
