import { CreateUserDto } from './dto/create-fan.dto';
import { UpdateFanDto } from './dto/update-fan.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { Organisateur } from 'src/organisateur/entities/organisateur.entity';
import { OrganisateurService } from 'src/organisateur/organisateur.service';
export declare class UserService {
    private fanRepository;
    private orgRepository;
    private orgService;
    private jwtService;
    constructor(fanRepository: Repository<User>, orgRepository: Repository<Organisateur>, orgService: OrganisateurService, jwtService: JwtService);
    register(createFanDto: CreateUserDto): Promise<User>;
    login(createFanDto: CreateUserDto, response: Response): Promise<{
        token: string;
        role: string;
        message: string;
    }>;
    logout(response: Response): Promise<{
        message: string;
    }>;
    findAll(): Promise<User[]>;
    findUserEmail(emailUser: string): Promise<User>;
    findUserId(idUser: number): Promise<User>;
    update(id: number, updateFanDto: UpdateFanDto): Promise<{
        message: string;
    }>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    generateToken(dataUser: any): Promise<string>;
}
