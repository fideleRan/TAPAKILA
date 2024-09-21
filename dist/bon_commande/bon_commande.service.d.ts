import { CreateBonCommandeDto } from './dto/create-bon_commande.dto';
import { UpdateBonCommandeDto } from './dto/update-bon_commande.dto';
import { BonCommande } from './entities/bon_commande.entity';
import { Repository } from 'typeorm';
import { Event } from 'src/event/entities/event.entity';
import { User } from 'src/USER/entities/user.entity';
import { TypeBillet } from 'src/type-billet/entities/type-billet.entity';
export declare class BonCommandeService {
    private bcRepo;
    private eventRepo;
    private userRepo;
    private billetRepo;
    constructor(bcRepo: Repository<BonCommande>, eventRepo: Repository<Event>, userRepo: Repository<User>, billetRepo: Repository<TypeBillet>);
    create(idEvent: number, idUser: number, idBillet: number, createBonCommandeDto: CreateBonCommandeDto): Promise<BonCommande>;
    findAll(): Promise<BonCommande[]>;
    findOne(id: number): Promise<BonCommande[]>;
    findOneByEvent(id: number): Promise<BonCommande>;
    findOneByUser(id: number): Promise<BonCommande>;
    update(id: number, updateBonCommandeDto: UpdateBonCommandeDto): string;
    remove(id: number): string;
}
