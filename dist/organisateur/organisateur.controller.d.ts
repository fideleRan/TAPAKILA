/// <reference types="multer" />
import { OrganisateurService } from './organisateur.service';
import { CreateOrganisateurDto } from './dto/create-organisateur.dto';
import { UpdateOrganisateurDto } from './dto/update-organisateur.dto';
export declare class OrganisateurController {
    private readonly organisateurService;
    constructor(organisateurService: OrganisateurService);
    register(createOrganisateurDto: CreateOrganisateurDto): Promise<import("./entities/organisateur.entity").Organisateur>;
    login(createOrganisateurDto: CreateOrganisateurDto): Promise<{
        token: string;
        message: string;
    }>;
    findAll(): Promise<import("./entities/organisateur.entity").Organisateur[]>;
    findOne(id: string): Promise<import("./entities/organisateur.entity").Organisateur>;
    update(id: string, updateOrganisateurDto: UpdateOrganisateurDto, Profile: Express.Multer.File): Promise<{
        message: string;
    }>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
