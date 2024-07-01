import { FavorisService } from './favoris.service';
import { CreateFavorisDto } from './dto/create-favoris.dto';
import { UpdateFavorisDto } from './dto/update-favoris.dto';
export declare class FavorisController {
    private readonly favorisService;
    constructor(favorisService: FavorisService);
    create(createFavorisDto: CreateFavorisDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateFavorisDto: UpdateFavorisDto): string;
    remove(id: string): string;
}
