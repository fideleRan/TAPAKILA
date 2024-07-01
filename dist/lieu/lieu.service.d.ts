import { CreateLieuDto } from './dto/create-lieu.dto';
import { UpdateLieuDto } from './dto/update-lieu.dto';
import { Lieu } from './entities/lieu.entity';
import { Repository } from 'typeorm';
export declare class LieuService {
    private lieuRep;
    constructor(lieuRep: Repository<Lieu>);
    create(createLieuDto: CreateLieuDto): Promise<CreateLieuDto & Lieu>;
    findAll(): Promise<Lieu[]>;
    findOne(id: number): Promise<Lieu>;
    update(id: number, updateLieuDto: UpdateLieuDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
