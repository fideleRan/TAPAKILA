import { Event } from "src/event/entities/event.entity"
import { LigneCommande } from "src/ligne_commande/entities/ligne_commande.entity"
import { User } from "src/USER/entities/user.entity"
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity('bon_commande')
export class BonCommande {
    @PrimaryGeneratedColumn()
    id:number

    @Column({nullable:true})
    date:string

    @Column({nullable:true})
    heure:string

    @Column({nullable:true})
    totalPrice:number

    @Column({nullable:true})
    qrCode:string

    @Column({default:false})
    status:boolean


    @OneToOne(
        ()=> User, usr=> usr.Bon_Commande,
        {
            onDelete:'CASCADE',
            onUpdate:'CASCADE',
            orphanedRowAction:'delete',
            eager:true
        }
    )
    @JoinColumn()
    User:User | number

    @OneToOne(
        ()=> Event, evt=> evt.Bon_Commande,
        {
            onDelete:'CASCADE',
            onUpdate:'CASCADE',
            orphanedRowAction:'delete',
            eager:true
        }
    )
    @JoinColumn()
    Event:Event | number

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
}
