import { Event } from "src/event/entities/event.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('lieu')
export class Lieu {
    @PrimaryGeneratedColumn()
    id:number

    @Column({nullable:false})
    Name:string

    @Column({nullable:true})
    Description:string

    @Column({nullable:false})
    Adresse:string

    @Column({nullable:true})
    CapaciteMax:number

    @Column({nullable:true})
    Localisation:string

    @OneToMany(
        ()=>Event, ev=>ev.Lieu,
        {
            onDelete:'CASCADE',
            onUpdate:'CASCADE',
            orphanedRowAction:'delete'
        }
    )
    Event:Event []
}
