import { Event } from "src/event/entities/event.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('organisateur')
export class Organisateur {
    @PrimaryGeneratedColumn()
    id:number

    @Column({nullable:true})
    Name:string

    @Column({nullable:true})
    Username:string

    @Column()
    Password:string

    @Column({nullable:true})
    Email:string

    @Column({nullable:true})
    Tel:string

    @Column({nullable:true})
    SiteWeb:string

    @Column({nullable:true})
    Profile:string

    @OneToMany(
        () => Event, ev=>ev.Organisateur,
        {
            onDelete:"CASCADE",
            onUpdate:'CASCADE',
            orphanedRowAction:'delete'
        }
    )
    Event: Event[] | number

}
