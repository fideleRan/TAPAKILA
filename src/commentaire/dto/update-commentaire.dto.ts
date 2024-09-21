import { PartialType } from '@nestjs/swagger';
import { CreateCommentaireDto } from './create-commentaire.dto';

export class UpdateCommentaireDto extends PartialType(CreateCommentaireDto) {}
