import { BonCommande } from "src/bon_commande/entities/bon_commande.entity";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id:number

    @Column({nullable:true})
    Name:string

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
    Twitter:string

    @Column({nullable:true})
    Instagram:string


    @OneToOne(
        ()=>BonCommande, bc=>bc.User,
        {
            onDelete:'CASCADE',
            onUpdate:'CASCADE',
            orphanedRowAction:'nullify'
        }
    )
    Bon_Commande:BonCommande | number

    
}
