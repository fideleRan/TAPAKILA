import { BonCommande } from "src/bon_commande/entities/bon_commande.entity";
export declare class User {
    id: number;
    Name: string;
    Username: string;
    Email: string;
    Age: number;
    Biography: string;
    Profile: string;
    Password: string;
    Facebook: string;
    Twitter: string;
    Instagram: string;
    Bon_Commande: BonCommande | number;
}
