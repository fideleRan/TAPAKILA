import { BonCommandeService } from './bon_commande.service';
import { CreateBonCommandeDto } from './dto/create-bon_commande.dto';
import { UpdateBonCommandeDto } from './dto/update-bon_commande.dto';
export declare class BonCommandeController {
    private readonly bonCommandeService;
    constructor(bonCommandeService: BonCommandeService);
    create(idEvent: string, idUser: string, idBillet: string, createBonCommandeDto: CreateBonCommandeDto): Promise<import("./entities/bon_commande.entity").BonCommande>;
    findAll(): Promise<import("./entities/bon_commande.entity").BonCommande[]>;
    findOne(id: string): Promise<import("./entities/bon_commande.entity").BonCommande[]>;
    findOneByUser(id: string): Promise<import("./entities/bon_commande.entity").BonCommande>;
    findOneByEvent(id: string): Promise<import("./entities/bon_commande.entity").BonCommande>;
    update(id: string, updateBonCommandeDto: UpdateBonCommandeDto): string;
    remove(id: string): string;
}
