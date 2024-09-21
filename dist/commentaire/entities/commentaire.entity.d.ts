import { Event } from "src/event/entities/event.entity";
import { User } from "src/USER/entities/user.entity";
export declare class Commentaire {
    id: number;
    Message: string;
    date: Date;
    Event: Event | number;
    User: User | number;
}
