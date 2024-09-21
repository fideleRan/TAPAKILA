import { BonCommande } from "src/bon_commande/entities/bon_commande.entity";
import { TypeBillet } from "src/type-billet/entities/type-billet.entity";
export declare class LigneCommande {
    id: number;
    nameBillet: string;
    nbBillet: number;
    pu: number;
    montant: number;
    Bon_Commande: BonCommande | number;
    Type_Billet: TypeBillet | number;
}
