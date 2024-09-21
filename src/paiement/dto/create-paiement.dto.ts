import { BonCommande } from "src/bon_commande/entities/bon_commande.entity"

export class CreatePaiementDto {
    Montant:number

    Date:string

    Mode:string

    Tel:string

    NumTransaction:string

    Status:string

    QRCode:string

    Bon_Commande:BonCommande | number
}
