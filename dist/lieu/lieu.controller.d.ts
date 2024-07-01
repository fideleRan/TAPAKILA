import { LieuService } from './lieu.service';
import { CreateLieuDto } from './dto/create-lieu.dto';
import { UpdateLieuDto } from './dto/update-lieu.dto';
export declare class LieuController {
    private readonly lieuService;
    constructor(lieuService: LieuService);
    create(createLieuDto: CreateLieuDto): Promise<CreateLieuDto & import("./entities/lieu.entity").Lieu>;
    findAll(): Promise<import("./entities/lieu.entity").Lieu[]>;
    findOne(id: string): Promise<import("./entities/lieu.entity").Lieu>;
    update(id: string, updateLieuDto: UpdateLieuDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
