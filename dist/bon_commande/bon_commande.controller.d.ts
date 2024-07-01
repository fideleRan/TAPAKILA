import { BonCommandeService } from './bon_commande.service';
import { CreateBonCommandeDto } from './dto/create-bon_commande.dto';
import { UpdateBonCommandeDto } from './dto/update-bon_commande.dto';
export declare class BonCommandeController {
    private readonly bonCommandeService;
    constructor(bonCommandeService: BonCommandeService);
    create(idEvent: string, idUser: string, createBonCommandeDto: CreateBonCommandeDto): Promise<{
        status: number;
        message: string;
    }>;
    findAll(): Promise<import("./entities/bon_commande.entity").BonCommande[]>;
    findOne(id: string): Promise<import("./entities/bon_commande.entity").BonCommande[]>;
    update(id: string, updateBonCommandeDto: UpdateBonCommandeDto): string;
    remove(id: string): string;
}
