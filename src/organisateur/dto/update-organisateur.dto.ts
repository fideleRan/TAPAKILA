import { PartialType } from '@nestjs/swagger';
import { CreateOrganisateurDto } from './create-organisateur.dto';

export class UpdateOrganisateurDto extends PartialType(CreateOrganisateurDto) {}
