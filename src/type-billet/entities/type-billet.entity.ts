import { Event } from "src/event/entities/event.entity";
import { LigneCommande } from "src/ligne_commande/entities/ligne_commande.entity";
import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("type_billet")
export class TypeBillet {
    @PrimaryGeneratedColumn()
    id:number

    @Column({nullable:false})
    Name:string

    @Column({nullable:false})
    Price:number

    @Column({nullable:false})
    nbTotal:number

    @Column({default:0})
    nbVendu:number

    @ManyToOne(
        ()=>Event, ev => ev.Type_Billet,
        {
            onDelete:'CASCADE',
            onUpdate:"CASCADE",
            orphanedRowAction:'delete',
            eager:true
        }
    )
    Event: Event | number
    
    @OneToOne(
        ()=>LigneCommande, lc=>lc.Type_Billet,
        {
            onDelete:'CASCADE',
            onUpdate:'CASCADE',
            orphanedRowAction:'nullify'
        }
    )
    Ligne_Commande:LigneCommande|number
}
