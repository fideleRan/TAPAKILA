import { MaxLength } from "class-validator";
import { BonCommande } from "src/bon_commande/entities/bon_commande.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('paiement')
export class Paiement {
    @PrimaryGeneratedColumn()
    id:number

    @Column({nullable:false})
    Montant:number

    @Column({type:"datetime", default:()=>"CURRENT_TIMESTAMP"})
    Date:Date

    @Column({nullable:false})
    Mode:string

    @Column({default:' '})
    Tel:string

    @Column({nullable:false})
    NumTransaction:string

    @Column({default:'en attente'})
    Status:string

    @Column({default:'', length: 8000 })
    QRcode:string

    @OneToOne(
        ()=>BonCommande, bc=>bc.Paiement,
        {
            onDelete:'CASCADE',
            onUpdate:'CASCADE',
            orphanedRowAction:'delete',
            eager:true
        }
    )
    @JoinColumn()
    Bon_Commande:BonCommande | number

}
