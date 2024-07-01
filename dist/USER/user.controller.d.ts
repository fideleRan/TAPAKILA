/// <reference types="cookie-parser" />
/// <reference types="multer" />
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-fan.dto';
import { UpdateFanDto } from './dto/update-fan.dto';
import { Request, Response } from 'express';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    register(createFanDto: CreateUserDto): Promise<import("./entities/user.entity").User>;
    login(createFanDto: CreateUserDto, response: Response): Promise<{
        token: string;
        role: string;
        message: string;
    }>;
    verification(request: Request): Promise<import("./entities/user.entity").User>;
    logout(response: Response): Promise<{
        message: string;
    }>;
    findAll(): Promise<import("./entities/user.entity").User[]>;
    findOne(emailUser: string): Promise<import("./entities/user.entity").User>;
    update(id: string, updateFanDto: UpdateFanDto, Profile: Express.Multer.File): Promise<import("./entities/user.entity").User>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
