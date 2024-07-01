import { CreateOrganisateurDto } from './dto/create-organisateur.dto';
import { UpdateOrganisateurDto } from './dto/update-organisateur.dto';
import { Repository } from 'typeorm';
import { Organisateur } from './entities/organisateur.entity';
import { JwtService } from '@nestjs/jwt';
export declare class OrganisateurService {
    private orgRepo;
    private jwtService;
    constructor(orgRepo: Repository<Organisateur>, jwtService: JwtService);
    register(createOrganisateurDto: CreateOrganisateurDto): Promise<Organisateur>;
    login(createOrganisateurDto: CreateOrganisateurDto): Promise<{
        token: string;
        message: string;
    }>;
    findAll(): Promise<Organisateur[]>;
    findOne(id: number): Promise<Organisateur>;
    update(id: number, updateOrganisateurDto: UpdateOrganisateurDto): Promise<{
        message: string;
    }>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
