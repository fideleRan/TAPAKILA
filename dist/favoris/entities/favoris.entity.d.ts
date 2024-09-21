import { Event } from "src/event/entities/event.entity";
import { User } from "src/USER/entities/user.entity";
export declare class Favoris {
    id: number;
    User: User | number;
    Event: Event | number;
}
