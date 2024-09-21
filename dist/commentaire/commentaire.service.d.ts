import { CreateCommentaireDto } from './dto/create-commentaire.dto';
import { UpdateCommentaireDto } from './dto/update-commentaire.dto';
import { Commentaire } from './entities/commentaire.entity';
import { Repository } from 'typeorm';
import { Event } from 'src/event/entities/event.entity';
import { User } from 'src/USER/entities/user.entity';
export declare class CommentaireService {
    private comentRepo;
    private eventRepo;
    private userRepo;
    constructor(comentRepo: Repository<Commentaire>, eventRepo: Repository<Event>, userRepo: Repository<User>);
    create(idEvent: number, idUser: number, createCommentaireDto: CreateCommentaireDto): Promise<Commentaire>;
    findAll(): Promise<Commentaire[]>;
    findOne(id: number): string;
    update(id: number, updateCommentaireDto: UpdateCommentaireDto): Promise<{
        status: number;
        message: string;
    }>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
