import { BonCommande } from "src/bon_commande/entities/bon_commande.entity";
export declare class Paiement {
    id: number;
    Montant: number;
    Date: Date;
    Mode: string;
    Tel: string;
    NumTransaction: string;
    Status: string;
    QRcode: string;
    Bon_Commande: BonCommande | number;
}
