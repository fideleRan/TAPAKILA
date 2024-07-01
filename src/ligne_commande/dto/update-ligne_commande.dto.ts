import { PartialType } from '@nestjs/swagger';
import { CreateLigneCommandeDto } from './create-ligne_commande.dto';

export class UpdateLigneCommandeDto extends PartialType(CreateLigneCommandeDto) {}
