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
exports.OrganisateurService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const organisateur_entity_1 = require("./entities/organisateur.entity");
const fs_1 = require("fs");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let OrganisateurService = class OrganisateurService {
    constructor(orgRepo, jwtService) {
        this.orgRepo = orgRepo;
        this.jwtService = jwtService;
    }
    async register(createOrganisateurDto) {
        const verification = await this.orgRepo.findOne({ where: { Email: createOrganisateurDto.Email } });
        if (verification)
            throw new common_1.BadRequestException("Cette Nom d'utilisateur existe deja");
        let randomName = '';
        const character = "abcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < 10; i++) {
            const random = Math.floor(Math.random() * character.length);
            randomName += character.charAt(random);
        }
        const organisateur = this.orgRepo.create({
            ...createOrganisateurDto,
            Username: randomName
        });
        return await this.orgRepo.save(organisateur);
    }
    async login(createOrganisateurDto) {
        const verificationEmail = await this.orgRepo.findOne({ where: { Email: createOrganisateurDto.Email } });
        if (!verificationEmail)
            throw new common_1.BadRequestException("Email incorrecte");
        if (!(await bcrypt.compare(createOrganisateurDto.Password, verificationEmail.Password)))
            throw new common_1.BadRequestException("Mot de passe Incorrecte");
        const dataUser = verificationEmail;
        delete dataUser.Password;
        const token = await this.jwtService.sign({ ...dataUser });
        return {
            token: token,
            message: "Organisateur authentifié avec succes"
        };
    }
    findAll() {
        return this.orgRepo.find();
    }
    async findOne(id) {
        try {
            return await this.orgRepo.findOneBy({ id });
        }
        catch (error) {
            throw new common_1.NotFoundException("Cette organisateur n'existe pas");
        }
    }
    async update(id, updateOrganisateurDto) {
        const org = await this.orgRepo.findOneBy({ id });
        if (!org)
            throw new common_1.NotFoundException("Cette organisateur n'existe pas");
        const dataOrg = this.orgRepo.create(updateOrganisateurDto);
        await this.orgRepo.update(id, dataOrg);
        return { message: "Mise à jours effectuée" };
    }
    async remove(id) {
        try {
            const fan = await this.orgRepo.findOne({ where: { id } });
            if (!fan)
                throw new common_1.NotFoundException('Fan non trouvé');
            if (fan.Profile) {
                (0, fs_1.unlinkSync)(`public/photo/profileOrg/${fan.Profile}`);
            }
            return await this.orgRepo.delete(id);
        }
        catch (error) {
            throw new common_1.BadRequestException("suppression echoué", error);
        }
    }
};
exports.OrganisateurService = OrganisateurService;
exports.OrganisateurService = OrganisateurService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(organisateur_entity_1.Organisateur)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], OrganisateurService);
//# sourceMappingURL=organisateur.service.js.map