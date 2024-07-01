import { Event } from "src/event/entities/event.entity";
import { LigneCommande } from "src/ligne_commande/entities/ligne_commande.entity";
import { User } from "src/USER/entities/user.entity";
export declare class BonCommande {
    id: number;
    date: string;
    heure: string;
    totalPrice: number;
    qrCode: string;
    status: boolean;
    User: User | number;
    Event: Event | number;
    Ligne_Commande: LigneCommande[] | number;
}
