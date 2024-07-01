import { Injectable, NotFoundException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { response } from "express";
import { ExtractJwt, Strategy } from "passport-jwt";
import { User } from "src/USER/entities/user.entity";
import { UserService } from "src/USER/user.service";
import { Repository } from "typeorm";

@Injectable()
export class JwtAuthStrategy extends PassportStrategy(Strategy){
    constructor(
        @InjectRepository(User) private userRep:Repository<User>,
        private userService :UserService
    ){
        super(
            {
                //Extraction du TokenJWT en fonction personnaliser
                jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
                ignoreExpiration: false,
                secretOrKey:process.env.JWT_SECRET
            }
        )
    }
    async validate(payload:any){
        console.log(payload);
        if(!payload) throw new NotFoundException('Utilisateur introuvable')

        return await this.userService.login(payload,response)
    }
}