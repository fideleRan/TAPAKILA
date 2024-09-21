import { CreateTypeBilletDto } from './dto/create-type-billet.dto';
import { UpdateTypeBilletDto } from './dto/update-type-billet.dto';
import { TypeBillet } from './entities/type-billet.entity';
import { Repository } from 'typeorm';
import { Event } from 'src/event/entities/event.entity';
export declare class TypeBilletService {
    private billetRepo;
    private eventRepo;
    constructor(billetRepo: Repository<TypeBillet>, eventRepo: Repository<Event>);
    create(idEvent: number, createTypeBilletDto: CreateTypeBilletDto): Promise<{
        status: number;
        message: string;
    }>;
    findAll(): Promise<TypeBillet[]>;
    findOne(id: number): Promise<string | TypeBillet[]>;
    findOneBillet(id: number): Promise<string | TypeBillet[]>;
    update(id: number, updateTypeBilletDto: UpdateTypeBilletDto): string;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
