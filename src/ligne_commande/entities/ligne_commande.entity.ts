import { BonCommande } from "src/bon_commande/entities/bon_commande.entity";
import { TypeBillet } from "src/type-billet/entities/type-billet.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('ligne_commande')
export class LigneCommande {
    @PrimaryGeneratedColumn()
    id:number

    @Column({nullable:false})
    nameBillet:string

    @Column({nullable:false})
    nbBillet:number

    @Column({nullable:false})
    pu:number

    @Column({nullable:false})
    pt:number

    @ManyToOne(
        ()=>BonCommande, bc=>bc.Ligne_Commande,
        {
            onDelete:'CASCADE',
            onUpdate:'CASCADE',
            orphanedRowAction:'delete'
        }
    )
    Bon_Commande:BonCommande | number

    @OneToOne(
        ()=>TypeBillet, tb=>tb.Ligne_Commande,
        {
            onDelete:'CASCADE',
            onUpdate:'CASCADE',
            orphanedRowAction:'delete',
            eager:true
        }
    )
    @JoinColumn()
    Type_Billet:TypeBillet | number
}
