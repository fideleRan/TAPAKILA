import { TypeBilletService } from './type-billet.service';
import { CreateTypeBilletDto } from './dto/create-type-billet.dto';
import { UpdateTypeBilletDto } from './dto/update-type-billet.dto';
export declare class TypeBilletController {
    private readonly typeBilletService;
    constructor(typeBilletService: TypeBilletService);
    create(idEvent: string, createTypeBilletDto: CreateTypeBilletDto): Promise<{
        status: number;
        message: string;
    }>;
    findOne(id: string): Promise<string | import("./entities/type-billet.entity").TypeBillet[]>;
    findOneBillet(id: string): Promise<string | import("./entities/type-billet.entity").TypeBillet[]>;
    update(id: string, updateTypeBilletDto: UpdateTypeBilletDto): string;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
