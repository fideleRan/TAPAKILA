import { BonCommande } from "src/bon_commande/entities/bon_commande.entity";
import { Commentaire } from "src/commentaire/entities/commentaire.entity";
import { Favoris } from "src/favoris/entities/favoris.entity";
import { Lieu } from "src/lieu/entities/lieu.entity";
import { Organisateur } from "src/organisateur/entities/organisateur.entity";
import { TypeBillet } from "src/type-billet/entities/type-billet.entity";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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

    @Column({default:0})
    Age:number

    @Column({default:0})
    Etoile:number

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

    @OneToMany(
        ()=>Commentaire, tb => tb.Event,
        {
            onDelete:"CASCADE",
            onUpdate:"CASCADE",
            orphanedRowAction:"nullify"
        }
    )
    Commentaire:Commentaire[] | number

    @ManyToOne(
        ()=>BonCommande, bc => bc.Event,
        {
            onDelete:'CASCADE',
            onUpdate:'CASCADE',
            orphanedRowAction:'nullify'
        }
    )
    Bon_Commande :BonCommande[] | number

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

    @OneToMany(
        () => Favoris, ev=>ev.Event,
        {
            onDelete:"CASCADE",
            onUpdate:'CASCADE',
            orphanedRowAction:'nullify'
        }
    )
    Favoris: Favoris[] | number
}
