import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTypeBilletDto } from './dto/create-type-billet.dto';
import { UpdateTypeBilletDto } from './dto/update-type-billet.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeBillet } from './entities/type-billet.entity';
import { Repository } from 'typeorm';
import { Event } from 'src/event/entities/event.entity';

@Injectable()
export class TypeBilletService {
  constructor(
    @InjectRepository(TypeBillet) private billetRepo : Repository<TypeBillet>,
    @InjectRepository(Event) private eventRepo : Repository<Event>
  ){}
  async create( idEvent:number, createTypeBilletDto: CreateTypeBilletDto) {
    console.log(createTypeBilletDto);
    
    const verifEvent = await this.eventRepo.findOne({where:{id:idEvent}})
    if(!verifEvent) throw new NotFoundException('Cette evennemrnt n existe pas')
    
      
    const data = await this.billetRepo.create({
      ...createTypeBilletDto,
      Price:+createTypeBilletDto.Price,
      nbTotal:+createTypeBilletDto.nbTotal,
      Event:verifEvent
    })
    console.log(data);
    
    await this.billetRepo.save(data)

    return {status : 200, message:'Billet enregistré'};
  }

  findAll() {
    return this.billetRepo.find();
  }

  async findOne(id: number) {
    console.log(id);
    
    const billetEvent = await this.billetRepo.findBy({Event:{id}})
    return billetEvent;
    return `This action returns a #${id} typeBillet`;
  }


  update(id: number, updateTypeBilletDto: UpdateTypeBilletDto) {
    return `This action updates a #${id} typeBillet`;
  }

  remove(id: number) {
    return `This action removes a #${id} typeBillet`;
  }
}
