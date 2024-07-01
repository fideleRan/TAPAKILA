import { BonCommande } from "src/bon_commande/entities/bon_commande.entity";
import { Lieu } from "src/lieu/entities/lieu.entity";
import { Organisateur } from "src/organisateur/entities/organisateur.entity";
import { TypeBillet } from "src/type-billet/entities/type-billet.entity";
import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('event')
export class Event {
    @PrimaryGeneratedColumn()
    id:number

    @Column({nullable:false})
    Name:string

    @Column({nullable:true})
    Description:string

    @Column({nullable:true})
    Tag:string

    @Column({nullable:true})
    Cathegory:string

    @Column({nullable:true})
    Date_Debut:string
    
    @Column({nullable:true})
    Date_Fin:string

    @Column({nullable:true})
    Heure_Debut:string

    @Column({nullable:true})
    Heure_Fin:string

    @Column({nullable:true,default:"A venir"})
    status:string

    @Column({nullable:true})
    Photo:string

    @ManyToOne(
        ()=>Organisateur, org => org.Event,
        {
            onDelete:'CASCADE',
            onUpdate:"CASCADE",
            orphanedRowAction:'nullify',
            eager:true
        }
    )
    Organisateur:Organisateur | number

    @OneToMany(
        ()=>TypeBillet, tb => tb.Event,
        {
            onDelete:"CASCADE",
            onUpdate:"CASCADE",
            orphanedRowAction:"delete"
        }
    )
    Type_Billet:TypeBillet[] | number

    @OneToOne(
        ()=>BonCommande, bc => bc.Event,
        {
            onDelete:'CASCADE',
            onUpdate:'CASCADE',
            orphanedRowAction:'nullify'
        }
    )
    Bon_Commande :BonCommande | number

    @ManyToOne(
        ()=>Lieu, lieu=>lieu.Event,
        {
            onDelete:'CASCADE',
            onUpdate:'CASCADE',
            orphanedRowAction:'nullify',
            eager:true
        }
    )
    Lieu:Lieu | number
}
