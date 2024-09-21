import { Event } from "src/event/entities/event.entity";
import { User } from "src/USER/entities/user.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('favoris')
export class Favoris {
    @PrimaryGeneratedColumn()
    id:number

    @ManyToOne(
        () => User, ev=>ev.Favoris,
        {
            onDelete:"CASCADE",
            onUpdate:'CASCADE',
            orphanedRowAction:'delete',
            eager:true,
        }
    )
    User: User | number

    @ManyToOne(
        () => Event, ev=>ev.Favoris,
        {
            onDelete:"CASCADE",
            onUpdate:'CASCADE',
            orphanedRowAction:'delete',
            eager:true
        }
    )
    Event: Event | number
}
