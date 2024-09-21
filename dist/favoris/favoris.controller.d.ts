import { FavorisService } from './favoris.service';
import { CreateFavorisDto } from './dto/create-favoris.dto';
import { UpdateFavorisDto } from './dto/update-favoris.dto';
export declare class FavorisController {
    private readonly favorisService;
    constructor(favorisService: FavorisService);
    create(idEvent: string, idUser: string, CreateFavorisDto: CreateFavorisDto): Promise<import("./entities/favoris.entity").Favoris | {
        message: string;
    }>;
    findAll(): Promise<import("./entities/favoris.entity").Favoris[]>;
    findOne(id: string): Promise<import("./entities/favoris.entity").Favoris>;
    update(id: string, updateFavorisDto: UpdateFavorisDto): string;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
