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
exports.TypeBilletService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const type_billet_entity_1 = require("./entities/type-billet.entity");
const typeorm_2 = require("typeorm");
const event_entity_1 = require("../event/entities/event.entity");
let TypeBilletService = class TypeBilletService {
    constructor(billetRepo, eventRepo) {
        this.billetRepo = billetRepo;
        this.eventRepo = eventRepo;
    }
    async create(idEvent, createTypeBilletDto) {
        console.log(createTypeBilletDto);
        const verifEvent = await this.eventRepo.findOne({ where: { id: idEvent } });
        if (!verifEvent)
            throw new common_1.NotFoundException('Cette evennemrnt n existe pas');
        const data = await this.billetRepo.create({
            ...createTypeBilletDto,
            Price: +createTypeBilletDto.Price,
            nbTotal: +createTypeBilletDto.nbTotal,
            Event: verifEvent
        });
        console.log(data);
        await this.billetRepo.save(data);
        return { status: 200, message: 'Billet enregistré' };
    }
    findAll() {
        return this.billetRepo.find();
    }
    async findOne(id) {
        console.log(id);
        const billetEvent = await this.billetRepo.findBy({ Event: { id } });
        return billetEvent;
        return `This action returns a #${id} typeBillet`;
    }
    update(id, updateTypeBilletDto) {
        return `This action updates a #${id} typeBillet`;
    }
    remove(id) {
        return `This action removes a #${id} typeBillet`;
    }
};
exports.TypeBilletService = TypeBilletService;
exports.TypeBilletService = TypeBilletService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(type_billet_entity_1.TypeBillet)),
    __param(1, (0, typeorm_1.InjectRepository)(event_entity_1.Event)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], TypeBilletService);
//# sourceMappingURL=type-billet.service.js.map