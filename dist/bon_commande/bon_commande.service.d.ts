import { CreateBonCommandeDto } from './dto/create-bon_commande.dto';
import { UpdateBonCommandeDto } from './dto/update-bon_commande.dto';
import { BonCommande } from './entities/bon_commande.entity';
import { Repository } from 'typeorm';
import { Event } from 'src/event/entities/event.entity';
import { User } from 'src/USER/entities/user.entity';
export declare class BonCommandeService {
    private bcRepo;
    private eventRepo;
    private userRepo;
    constructor(bcRepo: Repository<BonCommande>, eventRepo: Repository<Event>, userRepo: Repository<User>);
    create(idEvent: number, idUser: number, createBonCommandeDto: CreateBonCommandeDto): Promise<{
        status: number;
        message: string;
    }>;
    findAll(): Promise<BonCommande[]>;
    findOne(id: number): Promise<BonCommande[]>;
    update(id: number, updateBonCommandeDto: UpdateBonCommandeDto): string;
    remove(id: number): string;
}
