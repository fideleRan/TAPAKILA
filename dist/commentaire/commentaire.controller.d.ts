import { CommentaireService } from './commentaire.service';
import { CreateCommentaireDto } from './dto/create-commentaire.dto';
import { UpdateCommentaireDto } from './dto/update-commentaire.dto';
export declare class CommentaireController {
    private readonly commentaireService;
    constructor(commentaireService: CommentaireService);
    create(idEvent: string, idUser: string, createCommentaireDto: CreateCommentaireDto): Promise<import("./entities/commentaire.entity").Commentaire>;
    findAll(): Promise<import("./entities/commentaire.entity").Commentaire[]>;
    findOne(id: string): string;
    update(id: string, updateCommentaireDto: UpdateCommentaireDto): Promise<{
        status: number;
        message: string;
    }>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
