import { Lieu } from "src/lieu/entities/lieu.entity";
import { Organisateur } from "src/organisateur/entities/organisateur.entity";
export declare class CreateEventDto {
    Name: string;
    Description: string;
    Tag: string;
    Cathegory: string;
    Date_Debut: string;
    Date_Fin: string;
    Heure_Debut: string;
    Heure_fin: string;
    status: string;
    Photo: string;
    Organisateur: Organisateur;
    Lieu: Lieu;
}
