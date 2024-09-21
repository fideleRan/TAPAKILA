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
exports.FavorisService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../USER/entities/user.entity");
const typeorm_2 = require("typeorm");
const event_entity_1 = require("../event/entities/event.entity");
const favoris_entity_1 = require("./entities/favoris.entity");
let FavorisService = class FavorisService {
    constructor(favoriRepo, eventRepo, userRepo) {
        this.favoriRepo = favoriRepo;
        this.eventRepo = eventRepo;
        this.userRepo = userRepo;
    }
    async create(idEvent, idUser, createFavoryDto) {
        const event = await this.eventRepo.findOneBy({ id: idEvent });
        if (!event)
            throw new common_1.NotFoundException("cet evennement n'existe pas");
        const user = await this.userRepo.findOneBy({ id: idUser });
        if (!user)
            throw new common_1.NotFoundException("cette utilisateur n'exste pas");
        const verification = await this.favoriRepo.findOneBy({ Event: event, User: user });
        if (verification) {
            return { message: "Cet évennementa été deja dans votre favoris" };
        }
        else {
            const data = this.favoriRepo.create({
                ...createFavoryDto,
                User: user,
                Event: event
            });
            return await this.favoriRepo.save(data);
        }
    }
    findAll() {
        return this.favoriRepo.find();
    }
    findOne(id) {
        try {
            return this.favoriRepo.findOneBy({ id });
        }
        catch (error) {
            throw new common_1.NotFoundException("Cette donnee n existe pas");
        }
    }
    update(id, updateFavorisDto) {
        return `This action updates a #${id} favoris`;
    }
    remove(id) {
        return this.favoriRepo.delete(id);
    }
};
exports.FavorisService = FavorisService;
exports.FavorisService = FavorisService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(favoris_entity_1.Favoris)),
    __param(1, (0, typeorm_1.InjectRepository)(event_entity_1.Event)),
    __param(2, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], FavorisService);
//# sourceMappingURL=favoris.service.js.map