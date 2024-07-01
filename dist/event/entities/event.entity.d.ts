import { BonCommande } from "src/bon_commande/entities/bon_commande.entity";
import { Lieu } from "src/lieu/entities/lieu.entity";
import { Organisateur } from "src/organisateur/entities/organisateur.entity";
import { TypeBillet } from "src/type-billet/entities/type-billet.entity";
export declare class Event {
    id: number;
    Name: string;
    Description: string;
    Tag: string;
    Cathegory: string;
    Date_Debut: string;
    Date_Fin: string;
    Heure_Debut: string;
    Heure_Fin: string;
    status: string;
    Photo: string;
    Organisateur: Organisateur | number;
    Type_Billet: TypeBillet[] | number;
    Bon_Commande: BonCommande | number;
    Lieu: Lieu | number;
}
