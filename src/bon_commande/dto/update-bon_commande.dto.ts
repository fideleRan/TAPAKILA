import { PartialType } from '@nestjs/swagger';
import { CreateBonCommandeDto } from './create-bon_commande.dto';

export class UpdateBonCommandeDto extends PartialType(CreateBonCommandeDto) {}
