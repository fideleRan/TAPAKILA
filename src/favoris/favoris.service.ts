import { Injectable } from '@nestjs/common';
import { CreateFavorisDto } from './dto/create-favoris.dto';
import { UpdateFavorisDto } from './dto/update-favoris.dto';

@Injectable()
export class FavorisService {
  create(createFavorisDto: CreateFavorisDto) {
    return 'This action adds a new favoris';
  }

  findAll() {
    return `This action returns all favoris`;
  }

  findOne(id: number) {
    return `This action returns a #${id} favoris`;
  }

  update(id: number, updateFavorisDto: UpdateFavorisDto) {
    return `This action updates a #${id} favoris`;
  }

  remove(id: number) {
    return `This action removes a #${id} favoris`;
  }
}
