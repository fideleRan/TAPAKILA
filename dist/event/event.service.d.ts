import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './entities/event.entity';
import { Repository } from 'typeorm';
import { Organisateur } from 'src/organisateur/entities/organisateur.entity';
import { Lieu } from 'src/lieu/entities/lieu.entity';
export declare class EventService {
    private eventRepo;
    private orgRepo;
    private lieuRepo;
    constructor(eventRepo: Repository<Event>, orgRepo: Repository<Organisateur>, lieuRepo: Repository<Lieu>);
    create(idOrg: number, createEventDto: CreateEventDto): Promise<Event>;
    findAll(): Promise<Event[]>;
    findOne(id: number): Promise<Event>;
    update(id: number, updateEventDto: UpdateEventDto): Promise<{
        status: number;
        message: string;
    }>;
    updateDate(id: number, updateEventDto: UpdateEventDto): Promise<{
        status: number;
        message: string;
    }>;
    updateLieu(id: number, updateEventDto: UpdateEventDto): Promise<{
        status: number;
        message: string;
    }>;
    updateDesc(id: number, updateEventDto: UpdateEventDto): Promise<{
        status: number;
        message: string;
    }>;
    updatePhoto(id: number, updateEventDto: UpdateEventDto): Promise<{
        status: number;
        message: string;
    }>;
    remove(id: number): string;
}
