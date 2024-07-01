"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entities/user.entity");
const typeorm_2 = require("typeorm");
const fs_1 = require("fs");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const organisateur_entity_1 = require("../organisateur/entities/organisateur.entity");
const organisateur_service_1 = require("../organisateur/organisateur.service");
let UserService = class UserService {
    constructor(fanRepository, orgRepository, orgService, jwtService) {
        this.fanRepository = fanRepository;
        this.orgRepository = orgRepository;
        this.orgService = orgService;
        this.jwtService = jwtService;
    }
    async register(createFanDto) {
        const verification = await this.fanRepository.findOne({ where: { Email: createFanDto.Email } });
        if (verification)
            throw new common_1.BadRequestException("Cette Nom d'utilisateur existe deja");
        let randomName = '';
        const character = "abcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < 10; i++) {
            const random = Math.floor(Math.random() * character.length);
            randomName += character.charAt(random);
        }
        const user = this.fanRepository.create({
            ...createFanDto,
            Name: randomName
        });
        return await this.fanRepository.save(user);
    }
    async login(createFanDto, response) {
        const verificationEmailFan = await this.fanRepository.findOne({ where: { Email: createFanDto.Email } });
        const verificationEmailorg = await this.orgRepository.findOne({ where: { Email: createFanDto.Email } });
        if (verificationEmailFan) {
            if (!(await bcrypt.compare(createFanDto.Password, verificationEmailFan.Password)))
                throw new common_1.BadRequestException("Mot de passe Incorrecte");
            const dataUserF = verificationEmailFan;
            delete dataUserF.Password;
            const token = await this.generateToken({ ...dataUserF });
            return {
                token: token,
                role: 'FAN',
                message: "Fan authentifié avec succes"
            };
        }
        else if (verificationEmailorg) {
            if (!(await bcrypt.compare(createFanDto.Password, verificationEmailorg.Password)))
                throw new common_1.BadRequestException("Mot de passe Incorrecte");
            const dataUserO = verificationEmailorg;
            delete dataUserO.Password;
            const token = await this.generateToken({ ...dataUserO });
            return {
                token: token,
                role: 'ORGANISATEUR',
                message: "Organisateur authentifié avec succes"
            };
        }
        else if (!verificationEmailFan || !verificationEmailorg) {
            throw new common_1.BadRequestException("User not Found");
        }
    }
    async verifCookie(request) {
        try {
            const cookie = request.cookies['jwt'];
            console.log(cookie);
            if (!cookie)
                throw new common_1.UnauthorizedException('User unauthorised');
            const dataCookies = this.jwtService.verifyAsync(cookie);
            if (!dataCookies)
                throw new common_1.UnauthorizedException('Cookies User not found');
            const user = await this.fanRepository.findOneBy({ id: dataCookies['id'] });
            delete user.Password;
            return user;
        }
        catch (error) {
            throw new common_1.UnauthorizedException();
        }
    }
    async logout(response) {
        response.clearCookie('jwt');
        return { message: 'Logout successful' };
    }
    findAll() {
        return this.fanRepository.find();
    }
    async findOne(emailUser) {
        try {
            return await this.fanRepository.findOneBy({ Email: emailUser });
        }
        catch (error) {
            throw new common_1.NotFoundException("User not found");
        }
    }
    async update(id, updateFanDto) {
        console.log('dto');
        console.log(updateFanDto);
        const fan = await this.fanRepository.findOne({ where: { id } });
        if (!fan)
            throw new common_1.NotFoundException('Fan non trouvé');
        if (isNaN(updateFanDto.Age))
            throw new common_1.BadRequestException('Age invalide');
        const dataUpdate = await this.fanRepository.create({
            ...updateFanDto,
            Password: fan.Password
        });
        console.log('data  to updte');
        console.log(dataUpdate);
        return dataUpdate;
    }
    async remove(id) {
        try {
            const fan = await this.fanRepository.findOne({ where: { id } });
            if (!fan)
                throw new common_1.NotFoundException('Fan non trouvé');
            if (fan.Profile) {
                (0, fs_1.unlinkSync)(`public/photo/profileUser/${fan.Profile}`);
            }
            return await this.fanRepository.delete(id);
        }
        catch (error) {
            throw new common_1.BadRequestException("suppression echoué", error);
        }
    }
    async generateToken(dataUser) {
        return this.jwtService.sign({ dataUser });
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(organisateur_entity_1.Organisateur)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        organisateur_service_1.OrganisateurService,
        jwt_1.JwtService])
], UserService);
//# sourceMappingURL=user.service.js.map