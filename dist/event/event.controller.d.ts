/// <reference types="multer" />
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
export declare class EventController {
    private readonly eventService;
    constructor(eventService: EventService);
    create(IdOrganisateur: string, createEventDto: CreateEventDto): Promise<import("./entities/event.entity").Event>;
    findAll(): Promise<import("./entities/event.entity").Event[]>;
    findOne(id: string): Promise<import("./entities/event.entity").Event>;
    update(id: string, updateEventDto: UpdateEventDto, Photo: Express.Multer.File): Promise<{
        status: number;
        message: string;
    }>;
    updateDate(id: string, updateEventDto: UpdateEventDto): Promise<{
        status: number;
        message: string;
    }>;
    updateLieu(id: string, updateEventDto: UpdateEventDto): Promise<{
        status: number;
        message: string;
    }>;
    updateDesc(id: string, updateEventDto: UpdateEventDto): Promise<{
        status: number;
        message: string;
    }>;
    updatePhoto(id: string, updateEventDto: UpdateEventDto, file: Express.Multer.File): Promise<{
        status: number;
        message: string;
    }>;
    remove(id: string): string;
}
