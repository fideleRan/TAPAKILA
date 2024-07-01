import { Strategy } from "passport-jwt";
import { User } from "src/USER/entities/user.entity";
import { UserService } from "src/USER/user.service";
import { Repository } from "typeorm";
declare const JwtAuthStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtAuthStrategy extends JwtAuthStrategy_base {
    private userRep;
    private userService;
    constructor(userRep: Repository<User>, userService: UserService);
    validate(payload: any): Promise<{
        token: string;
        role: string;
        message: string;
    }>;
}
export {};
