import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";
import { Reflector } from "@nestjs/core";
@Injectable()
export class AuthGuard implements CanActivate{
    constructor(
        private jwtService:JwtService,
        private reflector:Reflector
    ){}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const role = this.reflector.getAllAndOverride("role",[context.getHandler(), context.getClass()])
        //console.log(role);
        if(!role) return true
        
        
        const request = context.switchToHttp().getRequest()
        console.log(request.headers['authorization']);
        
            
        //const token = this.extractTokenFromHeader(request)
    }
    /*
    private extractTokenFromHeader(request:Request):string | undefined{
        const [type,token]=request.headers.authorization?.split('') ?? [];
        return type === 'Bearer' ? token : undefined
    }
        */
}