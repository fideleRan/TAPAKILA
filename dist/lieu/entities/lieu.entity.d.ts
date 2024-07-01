import { Event } from "src/event/entities/event.entity";
export declare class Lieu {
    id: number;
    Name: string;
    Description: string;
    Adresse: string;
    CapaciteMax: number;
    Localisation: string;
    Event: Event[];
}
