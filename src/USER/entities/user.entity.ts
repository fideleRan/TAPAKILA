import { BonCommande } from "src/bon_commande/entities/bon_commande.entity";
import { Commentaire } from "src/commentaire/entities/commentaire.entity";
import { Favoris } from "src/favoris/entities/favoris.entity";
import { Column, Entity, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id:number

    @Column({nullable:true})
    Username:string

    @Column({nullable:false})
    Email:string

    @Column({nullable:true})
    Age:number

    @Column({nullable:true})
    Biography:string

    @Column({nullable:true})
    Profile:string

    @Column()
    Password:string

    @Column({nullable:true})
    Facebook:string

    @Column({nullable:true})
    Instagram:string

    @Column({default:'FAN'})
    Role:string

    @OneToMany(
        ()=>BonCommande, bc=>bc.User,
        {
            onDelete:'CASCADE',
            onUpdate:'CASCADE',
            orphanedRowAction:'nullify'
        }
    )
    Bon_Commande:BonCommande[] | number

    @OneToMany(
        () => Favoris, ev=>ev.User,
        {
            onDelete:"CASCADE",
            onUpdate:'CASCADE',
            orphanedRowAction:'nullify'
        }
    )
    Favoris: Favoris[] | number

    @OneToMany(
        () => Commentaire, ev=>ev.User,
        {
            onDelete:"CASCADE",
            onUpdate:'CASCADE',
            orphanedRowAction:'nullify'
        }
    )
    Commentaire: Commentaire[] | number

    
}
