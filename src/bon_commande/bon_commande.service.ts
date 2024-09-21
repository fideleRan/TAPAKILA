import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBonCommandeDto } from './dto/create-bon_commande.dto';
import { UpdateBonCommandeDto } from './dto/update-bon_commande.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BonCommande } from './entities/bon_commande.entity';
import { Repository } from 'typeorm';
import { Event } from 'src/event/entities/event.entity';
import { User } from 'src/USER/entities/user.entity';
import { TypeBillet } from 'src/type-billet/entities/type-billet.entity';

@Injectable()
export class BonCommandeService {
  constructor(
    @InjectRepository(BonCommande) private bcRepo:Repository<BonCommande>,
    @InjectRepository(Event) private eventRepo:Repository<Event>,
    @InjectRepository(User) private userRepo:Repository<User>,
    @InjectRepository(TypeBillet) private billetRepo:Repository<TypeBillet>
  ){}
  async create(idEvent:number,idUser:number,idBillet:number,createBonCommandeDto: CreateBonCommandeDto) {
    const verifEvent = await this.eventRepo.findOne({where:{id:idEvent}})
    if(!verifEvent) throw new NotFoundException('Cette evennemrnt n existe pas')

    const verifUser = await this.userRepo.findOne({where:{id:idUser}})
    if(!verifUser) throw new NotFoundException('Cette utilisateur n existe pas')

    const verifBillet = await this.billetRepo.findOne({where:{id:idBillet}})
    if(!verifBillet) throw new NotFoundException('Cette billet n existe pas')

    const data = await this.bcRepo.create({
      ...createBonCommandeDto,
      Event:verifEvent,
      User:verifUser,
      Type_Billet:verifBillet
    })
    
    return await this.bcRepo.save(data)
  }

  findAll() {
    return this.bcRepo.find();
  }

  findOne(id: number) {
    return this.bcRepo.findBy({id});
  }

  findOneByEvent(id: number) {
    return this.bcRepo.findOneBy({Event:id});
  }

  findOneByUser(id: number) {
    return this.bcRepo.findOneBy({User:id});
  }

  update(id: number, updateBonCommandeDto: UpdateBonCommandeDto) {
    return `This action updates a #${id} bonCommande`;
  }

  remove(id: number) {
    return `This action removes a #${id} bonCommande`;
  }
}
