import { PaiementService } from './paiement.service';
import { CreatePaiementDto } from './dto/create-paiement.dto';
import { UpdatePaiementDto } from './dto/update-paiement.dto';
export declare class PaiementController {
    private readonly paiementService;
    constructor(paiementService: PaiementService);
    create(idBC: string, createPaiementDto: CreatePaiementDto): Promise<import("./entities/paiement.entity").Paiement>;
    findAll(): Promise<import("./entities/paiement.entity").Paiement[]>;
    findOne(id: string): Promise<import("./entities/paiement.entity").Paiement>;
    findOneUser(id: string): string;
    update(id: string, updatePaiementDto: UpdatePaiementDto): Promise<{
        message: string;
    }>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
