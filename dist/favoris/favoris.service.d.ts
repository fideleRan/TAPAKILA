import { CreateFavorisDto } from './dto/create-favoris.dto';
import { UpdateFavorisDto } from './dto/update-favoris.dto';
import { User } from 'src/USER/entities/user.entity';
import { Repository } from 'typeorm';
import { Event } from 'src/event/entities/event.entity';
import { Favoris } from './entities/favoris.entity';
export declare class FavorisService {
    private favoriRepo;
    private eventRepo;
    private userRepo;
    constructor(favoriRepo: Repository<Favoris>, eventRepo: Repository<Event>, userRepo: Repository<User>);
    create(idEvent: number, idUser: number, createFavoryDto: CreateFavorisDto): Promise<Favoris | {
        message: string;
    }>;
    findAll(): Promise<Favoris[]>;
    findOne(id: number): Promise<Favoris>;
    update(id: number, updateFavorisDto: UpdateFavorisDto): string;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
