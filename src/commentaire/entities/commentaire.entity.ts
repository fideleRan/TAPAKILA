import { Event } from "src/event/entities/event.entity"
import { User } from "src/USER/entities/user.entity"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity('Commentaire')
export class Commentaire {
    @PrimaryGeneratedColumn()
    id:number

    @Column({nullable:false})
    Message:string

    @Column({type:"datetime", default:()=>"CURRENT_TIMESTAMP"})
    date: Date
    
    @ManyToOne(
        () => Event, ev=>ev.Commentaire,
        {
            onDelete:"CASCADE",
            onUpdate:'CASCADE',
            orphanedRowAction:'delete',
            eager:true
        }
    )
    Event: Event | number

    @ManyToOne(
        () => User, ev=>ev.Commentaire,
        {
            onDelete:"CASCADE",
            onUpdate:'CASCADE',
            orphanedRowAction:'delete',
            eager:true
        }
    )
    User: User | number
}
