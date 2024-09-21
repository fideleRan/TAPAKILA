import { Event } from "src/event/entities/event.entity"
import { LigneCommande } from "src/ligne_commande/entities/ligne_commande.entity"
import { Paiement } from "src/paiement/entities/paiement.entity"
import { TypeBillet } from "src/type-billet/entities/type-billet.entity"
import { User } from "src/USER/entities/user.entity"
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity('bon_commande')
export class BonCommande {
    @PrimaryGeneratedColumn()
    id:number

    @Column({type:"datetime", default:()=>"CURRENT_TIMESTAMP"})
    Date:Date

    @Column()
    nbPlace:number

    @Column({default:0})
    TotalPrice:number

    @Column({default:true})
    Status:boolean

    @ManyToOne(
        ()=> User, usr=> usr.Bon_Commande,
        {
            onDelete:'CASCADE',
            onUpdate:'CASCADE',
            orphanedRowAction:'delete',
            eager:true
        }
    )
    User:User | number

    @ManyToOne(
        ()=> Event, evt=> evt.Bon_Commande,
        {
            onDelete:'CASCADE',
            onUpdate:'CASCADE',
            orphanedRowAction:'delete',
            eager:true
        }
    )
    Event:Event | number

    @ManyToOne(
        ()=> TypeBillet, evt=> evt.Bon_Commande,
        {
            onDelete:'CASCADE',
            onUpdate:'CASCADE',
            orphanedRowAction:'delete',
            eager:true
        }
    )
    Type_Billet:TypeBillet | number
    

    //INUTILES
    @OneToMany(
        ()=>LigneCommande, lc => lc.Bon_Commande,
        {
            onDelete:'CASCADE',
            onUpdate:'CASCADE',
            orphanedRowAction:'delete',
            eager:true
        }
    )
    Ligne_Commande : LigneCommande[] | number

    @OneToOne(
        ()=>Paiement, p=>p.Bon_Commande,
        {
            onDelete:'CASCADE',
            onUpdate:'CASCADE',
            orphanedRowAction:'delete',
            
        }
    )
    Paiement:Paiement | number
}
