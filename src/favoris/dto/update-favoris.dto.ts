import { PartialType } from '@nestjs/swagger';
import { CreateFavorisDto } from './create-favoris.dto';

export class UpdateFavorisDto extends PartialType(CreateFavorisDto) {}
