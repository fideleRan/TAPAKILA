import { LigneCommandeService } from './ligne_commande.service';
import { CreateLigneCommandeDto } from './dto/create-ligne_commande.dto';
import { UpdateLigneCommandeDto } from './dto/update-ligne_commande.dto';
export declare class LigneCommandeController {
    private readonly ligneCommandeService;
    constructor(ligneCommandeService: LigneCommandeService);
    create(idBC: string, idTypeBillet: string, createLigneCommandeDto: CreateLigneCommandeDto): Promise<{
        status: number;
        message: string;
    }>;
    findAll(): Promise<import("./entities/ligne_commande.entity").LigneCommande[]>;
    findOne(id: string): string;
    update(id: string, updateLigneCommandeDto: UpdateLigneCommandeDto): Promise<{
        status: number;
        message: string;
    }>;
    remove(id: string): Promise<{
        status: number;
        message: string;
    }>;
}
