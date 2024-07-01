import { PartialType } from '@nestjs/swagger';
import { CreateTypeBilletDto } from './create-type-billet.dto';

export class UpdateTypeBilletDto extends PartialType(CreateTypeBilletDto) {}
