import { BonCommande } from "src/bon_commande/entities/bon_commande.entity";
import { Event } from "src/event/entities/event.entity";
import { LigneCommande } from "src/ligne_commande/entities/ligne_commande.entity";
export declare class TypeBillet {
    id: number;
    Name: string;
    Price: number;
    nbTotal: number;
    nbVendu: number;
    Event: Event | number;
    Ligne_Commande: LigneCommande | number;
    Bon_Commande: BonCommande[] | number;
}
