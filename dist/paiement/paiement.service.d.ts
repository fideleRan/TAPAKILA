import { CreatePaiementDto } from './dto/create-paiement.dto';
import { UpdatePaiementDto } from './dto/update-paiement.dto';
import { Paiement } from './entities/paiement.entity';
import { Repository } from 'typeorm';
import { BonCommande } from 'src/bon_commande/entities/bon_commande.entity';
export declare class PaiementService {
    private paiementRepo;
    private BCRepo;
    constructor(paiementRepo: Repository<Paiement>, BCRepo: Repository<BonCommande>);
    create(idBC: number, createPaiementDto: CreatePaiementDto): Promise<Paiement>;
    findAll(): Promise<Paiement[]>;
    findOne(id: number): Promise<Paiement>;
    findOneUser(id: number): string;
    update(id: number, updatePaiementDto: UpdatePaiementDto): Promise<{
        message: string;
    }>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
