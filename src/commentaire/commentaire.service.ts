import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentaireDto } from './dto/create-commentaire.dto';
import { UpdateCommentaireDto } from './dto/update-commentaire.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Commentaire } from './entities/commentaire.entity';
import { Repository } from 'typeorm';
import { Event } from 'src/event/entities/event.entity';
import { User } from 'src/USER/entities/user.entity';

@Injectable()
export class CommentaireService {
  constructor(
    @InjectRepository(Commentaire) private comentRepo :Repository<Commentaire>,
    @InjectRepository(Event) private eventRepo :Repository<Event>,
    @InjectRepository(User) private userRepo :Repository<User>
  ){}
  async create(idEvent:number,idUser:number,createCommentaireDto: CreateCommentaireDto){
    const findEvent = await this.eventRepo.findOne({where:{id:idEvent}})
    if(!findEvent) throw new NotFoundException('Cette evennement n existe pas')

    const findUser = await this.userRepo.findOne({where:{id:idUser}})
    if(!findUser) throw new NotFoundException('Cette utilisateur n existe pas')
    const data = this.comentRepo.create({
      ...createCommentaireDto,
      Event:findEvent,
      User:findUser
    })
    return await this.comentRepo.save(data);
  }

  findAll() {
    return this.comentRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} commentaire`;
  }

  async update(id: number, updateCommentaireDto: UpdateCommentaireDto) {
    const findCom = await this.comentRepo.findOne({where:{id}})
    if(!findCom) throw new NotFoundException('Cette Commentaire n existe pas')
    await this.comentRepo.update(id,updateCommentaireDto)
    return {status:200, message:"Commentaire Modifier avec succes"}
  }

  async remove(id: number) {
    const findCom = await this.comentRepo.findOne({where:{id}})
    if(!findCom) throw new NotFoundException('Cette Commentaire n existe pas')
    return await this.comentRepo.delete(id);
  }
}
