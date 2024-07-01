import { CreateLigneCommandeDto } from './dto/create-ligne_commande.dto';
import { UpdateLigneCommandeDto } from './dto/update-ligne_commande.dto';
import { BonCommande } from 'src/bon_commande/entities/bon_commande.entity';
import { Repository } from 'typeorm';
import { LigneCommande } from './entities/ligne_commande.entity';
import { TypeBillet } from 'src/type-billet/entities/type-billet.entity';
export declare class LigneCommandeService {
    private lcRepo;
    private bcRepo;
    private tbRepo;
    constructor(lcRepo: Repository<LigneCommande>, bcRepo: Repository<BonCommande>, tbRepo: Repository<TypeBillet>);
    create(idBC: number, idTypeBillet: number, createLigneCommandeDto: CreateLigneCommandeDto): Promise<{
        status: number;
        message: string;
    }>;
    findAll(): Promise<LigneCommande[]>;
    findOne(id: number): string;
    update(id: number, updateLigneCommandeDto: UpdateLigneCommandeDto): Promise<{
        status: number;
        message: string;
    }>;
    remove(id: number): Promise<{
        status: number;
        message: string;
    }>;
}
