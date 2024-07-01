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
exports.EventService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const event_entity_1 = require("./entities/event.entity");
const typeorm_2 = require("typeorm");
const organisateur_entity_1 = require("../organisateur/entities/organisateur.entity");
const lieu_entity_1 = require("../lieu/entities/lieu.entity");
let EventService = class EventService {
    constructor(eventRepo, orgRepo, lieuRepo) {
        this.eventRepo = eventRepo;
        this.orgRepo = orgRepo;
        this.lieuRepo = lieuRepo;
    }
    async create(idOrg, createEventDto) {
        const findEvent = await this.eventRepo.findOne({ where: { Name: createEventDto.Name } });
        if (findEvent)
            throw new common_1.NotFoundException('Cette evennemrnt existe déja');
        const findOrganisateur = await this.orgRepo.findOne({ where: { id: idOrg } });
        if (!findOrganisateur)
            throw new common_1.NotFoundException('Cette organisateur n existe pas');
        const dataEvent = this.eventRepo.create({
            ...createEventDto,
            Organisateur: findOrganisateur
        });
        return await this.eventRepo.save(dataEvent);
    }
    findAll() {
        return this.eventRepo.find();
    }
    async findOne(id) {
        try {
            return await this.eventRepo.findOne({ where: { id } });
        }
        catch (error) {
            throw new common_1.NotFoundException("Cette evennement n existe pas");
        }
    }
    async update(id, updateEventDto) {
        const findEvent = await this.eventRepo.findOne({ where: { id } });
        if (!findEvent)
            throw new common_1.NotFoundException('Cet evennement n existe pas');
        const findLieu = await this.lieuRepo.findOne({ where: { id: +updateEventDto.Lieu } });
        if (!findLieu)
            throw new common_1.NotFoundException('Cet lieu n existe pas');
        const dataToUpdate = await this.eventRepo.create({
            ...updateEventDto,
            Lieu: findLieu
        });
        await this.eventRepo.update(id, dataToUpdate);
        return { status: 200, message: "Evennement à jours" };
    }
    async updateDate(id, updateEventDto) {
        const findEvent = await this.eventRepo.findOne({ where: { id } });
        if (!findEvent)
            throw new common_1.NotFoundException('Cette evennemrnt n existe pas');
        await this.eventRepo.update(id, updateEventDto);
        return { status: 200, message: "Date définie avec succes" };
    }
    async updateLieu(id, updateEventDto) {
        console.log(updateEventDto.Lieu);
        const findEvent = await this.eventRepo.findOne({ where: { id } });
        if (!findEvent)
            throw new common_1.NotFoundException('Cet evennement n existe pas');
        const findLieu = await this.lieuRepo.findOne({ where: { id: +updateEventDto.Lieu } });
        if (!findLieu)
            throw new common_1.NotFoundException('Cet lieu n existe pas');
        const dataEvent = await this.eventRepo.create({
            ...updateEventDto,
            Lieu: findLieu
        });
        await this.eventRepo.update(id, dataEvent);
        return { status: 200, message: "Lieu définie avec succes" };
    }
    async updateDesc(id, updateEventDto) {
        const findEvent = await this.eventRepo.findOne({ where: { id } });
        if (!findEvent)
            throw new common_1.NotFoundException('Cette evennemrnt n existe pas');
        const dataEvent = await this.eventRepo.create({
            ...updateEventDto,
            Description: updateEventDto.Description
        });
        await this.eventRepo.update(id, dataEvent);
        return { status: 200, message: "Description définie avec succes" };
    }
    async updatePhoto(id, updateEventDto) {
        const findEvent = await this.eventRepo.findOne({ where: { id } });
        if (!findEvent)
            throw new common_1.NotFoundException('Cette evennemrnt n existe pas');
        const dataEvent = await this.eventRepo.create({
            ...updateEventDto,
            Photo: updateEventDto.Photo
        });
        await this.eventRepo.update(id, dataEvent);
        return { status: 200, message: "Photo inmporté avec succes" };
    }
    remove(id) {
        return `This action removes a #${id} event`;
    }
};
exports.EventService = EventService;
exports.EventService = EventService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(event_entity_1.Event)),
    __param(1, (0, typeorm_1.InjectRepository)(organisateur_entity_1.Organisateur)),
    __param(2, (0, typeorm_1.InjectRepository)(lieu_entity_1.Lieu)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], EventService);
//# sourceMappingURL=event.service.js.map