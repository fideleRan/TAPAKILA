import { Event } from "src/event/entities/event.entity";
import { LigneCommande } from "src/ligne_commande/entities/ligne_commande.entity";
import { Paiement } from "src/paiement/entities/paiement.entity";
import { TypeBillet } from "src/type-billet/entities/type-billet.entity";
import { User } from "src/USER/entities/user.entity";
export declare class BonCommande {
    id: number;
    Date: Date;
    nbPlace: number;
    TotalPrice: number;
    Status: boolean;
    User: User | number;
    Event: Event | number;
    Type_Billet: TypeBillet | number;
    Ligne_Commande: LigneCommande[] | number;
    Paiement: Paiement | number;
}
