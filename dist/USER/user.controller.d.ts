/// <reference types="multer" />
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-fan.dto';
import { UpdateFanDto } from './dto/update-fan.dto';
import { Response } from 'express';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    register(createFanDto: CreateUserDto): Promise<import("./entities/user.entity").User>;
    login(createFanDto: CreateUserDto, response: Response): Promise<{
        token: string;
        role: string;
        message: string;
    }>;
    logout(response: Response): Promise<{
        message: string;
    }>;
    findAll(): Promise<import("./entities/user.entity").User[]>;
    findUserEmail(emailUser: string): Promise<import("./entities/user.entity").User>;
    finUserId(idUser: number): Promise<import("./entities/user.entity").User>;
    update(id: string, updateFanDto: UpdateFanDto, Profile: Express.Multer.File): Promise<{
        message: string;
    }>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
