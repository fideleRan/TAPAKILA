import { CreateFavorisDto } from './dto/create-favoris.dto';
import { UpdateFavorisDto } from './dto/update-favoris.dto';
export declare class FavorisService {
    create(createFavorisDto: CreateFavorisDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateFavorisDto: UpdateFavorisDto): string;
    remove(id: number): string;
}
