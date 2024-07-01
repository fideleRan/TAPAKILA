import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from './entities/event.entity';
import { Repository } from 'typeorm';
import { Organisateur } from 'src/organisateur/entities/organisateur.entity';
import { Lieu } from 'src/lieu/entities/lieu.entity';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event) private eventRepo: Repository<Event>,
    @InjectRepository(Organisateur) private orgRepo: Repository<Organisateur>,
    @InjectRepository(Lieu) private lieuRepo: Repository<Lieu>,
  ){}

  async create(idOrg:number ,createEventDto: CreateEventDto) {
    const findEvent = await this.eventRepo.findOne({where:{Name:createEventDto.Name}})
    if(findEvent) throw new NotFoundException('Cette evennemrnt existe déja')
    
    const findOrganisateur = await this.orgRepo.findOne({where:{id:idOrg}})
    if(!findOrganisateur) throw new NotFoundException('Cette organisateur n existe pas')      

    const dataEvent = this.eventRepo.create({
      ...createEventDto,
      Organisateur:findOrganisateur
    })
    return await this.eventRepo.save(dataEvent)   
  }

  findAll() {
    return this.eventRepo.find();
  }

  async findOne(id: number) {
    try{
      return await this.eventRepo.findOne({where:{id}})
    }
    catch(error){
      throw new NotFoundException("Cette evennement n existe pas")
    }
  }


  async update(id: number, updateEventDto: UpdateEventDto) {
    const findEvent = await this.eventRepo.findOne({where:{id}})
    if(!findEvent) throw new NotFoundException('Cet evennement n existe pas')

    const findLieu = await this.lieuRepo.findOne({where:{id:+updateEventDto.Lieu}})
    if(!findLieu) throw new NotFoundException('Cet lieu n existe pas')

    const dataToUpdate = await this.eventRepo.create({
      ...updateEventDto,
      Lieu:findLieu
    })

    await this.eventRepo.update(id,dataToUpdate)
    return {status:200, message:"Evennement à jours"};
  }

  async updateDate(id: number, updateEventDto: UpdateEventDto) {
    const findEvent = await this.eventRepo.findOne({where:{id}})
    if(!findEvent) throw new NotFoundException('Cette evennemrnt n existe pas')

    await this.eventRepo.update(id,updateEventDto)

    return {status:200, message:"Date définie avec succes"}
  }

  async updateLieu(id: number, updateEventDto: UpdateEventDto) {
    console.log(updateEventDto.Lieu);
    
    const findEvent = await this.eventRepo.findOne({where:{id}})
    if(!findEvent) throw new NotFoundException('Cet evennement n existe pas')
    
    const findLieu = await this.lieuRepo.findOne({where:{id:+updateEventDto.Lieu}})
    if(!findLieu) throw new NotFoundException('Cet lieu n existe pas')

    const dataEvent = await this.eventRepo.create({
      ...updateEventDto,
      Lieu:findLieu
    })
    await this.eventRepo.update(id,dataEvent)
    return {status:200, message:"Lieu définie avec succes"}
      
  }

  async updateDesc(id: number, updateEventDto: UpdateEventDto) {
    const findEvent = await this.eventRepo.findOne({where:{id}})
    if(!findEvent) throw new NotFoundException('Cette evennemrnt n existe pas')
    
    const dataEvent = await this.eventRepo.create({
      ...updateEventDto,
      Description:updateEventDto.Description
    })   
    
    await this.eventRepo.update(id,dataEvent)

    return {status:200, message:"Description définie avec succes"}
  }

  async updatePhoto(id: number, updateEventDto: UpdateEventDto) {
    const findEvent = await this.eventRepo.findOne({where:{id}})
    if(!findEvent) throw new NotFoundException('Cette evennemrnt n existe pas')
    
    const dataEvent = await this.eventRepo.create({
      ...updateEventDto,
      Photo:updateEventDto.Photo
    })   
    
    await this.eventRepo.update(id,dataEvent)

    return {status:200, message:"Photo inmporté avec succes"}
  }

  remove(id: number) {
    return `This action removes a #${id} event`;
  }
}
