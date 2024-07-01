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
exports.BonCommandeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const bon_commande_entity_1 = require("./entities/bon_commande.entity");
const typeorm_2 = require("typeorm");
const event_entity_1 = require("../event/entities/event.entity");
const user_entity_1 = require("../USER/entities/user.entity");
let BonCommandeService = class BonCommandeService {
    constructor(bcRepo, eventRepo, userRepo) {
        this.bcRepo = bcRepo;
        this.eventRepo = eventRepo;
        this.userRepo = userRepo;
    }
    async create(idEvent, idUser, createBonCommandeDto) {
        const verifEvent = await this.eventRepo.findOne({ where: { id: idEvent } });
        if (!verifEvent)
            throw new common_1.NotFoundException('Cette evennemrnt n existe pas');
        const verifUser = await this.userRepo.findOne({ where: { id: idUser } });
        if (!verifUser)
            throw new common_1.NotFoundException('Cette utilisateur n existe pas');
        const data = await this.bcRepo.create({
            ...createBonCommandeDto,
            Event: verifEvent,
            User: verifUser
        });
        await this.bcRepo.save(data);
        return { status: 200, message: 'Bon de commande créé avec succes' };
    }
    findAll() {
        return this.bcRepo.find();
    }
    findOne(id) {
        return this.bcRepo.findBy({ id });
    }
    update(id, updateBonCommandeDto) {
        return `This action updates a #${id} bonCommande`;
    }
    remove(id) {
        return `This action removes a #${id} bonCommande`;
    }
};
exports.BonCommandeService = BonCommandeService;
exports.BonCommandeService = BonCommandeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(bon_commande_entity_1.BonCommande)),
    __param(1, (0, typeorm_1.InjectRepository)(event_entity_1.Event)),
    __param(2, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], BonCommandeService);
//# sourceMappingURL=bon_commande.service.js.map