import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBonCommandeDto } from './dto/create-bon_commande.dto';
import { UpdateBonCommandeDto } from './dto/update-bon_commande.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BonCommande } from './entities/bon_commande.entity';
import { Repository } from 'typeorm';
import { Event } from 'src/event/entities/event.entity';
import { User } from 'src/USER/entities/user.entity';

@Injectable()
export class BonCommandeService {
  constructor(
    @InjectRepository(BonCommande) private bcRepo:Repository<BonCommande>,
    @InjectRepository(Event) private eventRepo:Repository<Event>,
    @InjectRepository(User) private userRepo:Repository<User>
  ){}
  async create(idEvent:number,idUser:number,createBonCommandeDto: CreateBonCommandeDto) {
    const verifEvent = await this.eventRepo.findOne({where:{id:idEvent}})
    if(!verifEvent) throw new NotFoundException('Cette evennemrnt n existe pas')

    const verifUser = await this.userRepo.findOne({where:{id:idUser}})
    if(!verifUser) throw new NotFoundException('Cette utilisateur n existe pas')

    const data = await this.bcRepo.create({
      ...createBonCommandeDto,
      Event:verifEvent,
      User:verifUser
    })

    await this.bcRepo.save(data)

    return {status : 200, message:'Bon de commande créé avec succes'};
  }

  findAll() {
    return this.bcRepo.find();
  }

  findOne(id: number) {
    return this.bcRepo.findBy({id});
  }

  update(id: number, updateBonCommandeDto: UpdateBonCommandeDto) {
    return `This action updates a #${id} bonCommande`;
  }

  remove(id: number) {
    return `This action removes a #${id} bonCommande`;
  }
}
