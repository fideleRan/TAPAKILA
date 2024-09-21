import { PartialType } from '@nestjs/swagger';
import { CreatePaiementDto } from './create-paiement.dto';

export class UpdatePaiementDto extends PartialType(CreatePaiementDto) {}
