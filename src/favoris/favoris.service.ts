import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFavorisDto } from './dto/create-favoris.dto';
import { UpdateFavorisDto } from './dto/update-favoris.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/USER/entities/user.entity';
import { Repository } from 'typeorm';
import { Event } from 'src/event/entities/event.entity';
import { Favoris } from './entities/favoris.entity';

@Injectable()
export class FavorisService {
  constructor(
    @InjectRepository(Favoris) private favoriRepo:Repository<Favoris>,
    @InjectRepository(Event) private eventRepo:Repository<Event>,
    @InjectRepository(User) private userRepo:Repository<User>
  ){}
  async create(idEvent:number, idUser:number ,createFavoryDto:CreateFavorisDto) {
    
    const event = await this.eventRepo.findOneBy({id:idEvent})
    if (!event) throw new NotFoundException("cet evennement n'existe pas")
    const user =await this.userRepo.findOneBy({id:idUser})
    if (!user) throw new NotFoundException("cette utilisateur n'exste pas")
    const verification = await this.favoriRepo.findOneBy({Event:event, User:user})
    if (verification) {
      return {message:"Cet évennementa été deja dans votre favoris"};
    }
    else{
      const data = this.favoriRepo.create({
        ...createFavoryDto,
        User: user,
        Event: event
      }) 
      return await this.favoriRepo.save(data)
    }    
  }

  findAll() {
    return this.favoriRepo.find();
  }

  findOne(id: number) {
    try{
      return this.favoriRepo.findOneBy({id})
    }
    catch(error){
      throw new NotFoundException("Cette donnee n existe pas")
    }
  }

  update(id: number, updateFavorisDto: UpdateFavorisDto) {
    return `This action updates a #${id} favoris`;
  }

  remove(id: number) {
    return this.favoriRepo.delete(id);
  }
}
