import { Event } from "src/event/entities/event.entity";
export declare class Organisateur {
    id: number;
    Name: string;
    Username: string;
    Password: string;
    Email: string;
    Tel: string;
    SiteWeb: string;
    Profile: string;
    Event: Event[] | number;
}
