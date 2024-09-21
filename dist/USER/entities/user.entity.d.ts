import { BonCommande } from "src/bon_commande/entities/bon_commande.entity";
import { Commentaire } from "src/commentaire/entities/commentaire.entity";
import { Favoris } from "src/favoris/entities/favoris.entity";
export declare class User {
    id: number;
    Username: string;
    Email: string;
    Age: number;
    Biography: string;
    Profile: string;
    Password: string;
    Facebook: string;
    Instagram: string;
    Role: string;
    Bon_Commande: BonCommande[] | number;
    Favoris: Favoris[] | number;
    Commentaire: Commentaire[] | number;
}
