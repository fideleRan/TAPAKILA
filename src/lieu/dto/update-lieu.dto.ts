import { PartialType } from '@nestjs/swagger';
import { CreateLieuDto } from './create-lieu.dto';

export class UpdateLieuDto extends PartialType(CreateLieuDto) {}
