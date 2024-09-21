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
exports.PaiementService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const paiement_entity_1 = require("./entities/paiement.entity");
const typeorm_2 = require("typeorm");
const bon_commande_entity_1 = require("../bon_commande/entities/bon_commande.entity");
let PaiementService = class PaiementService {
    constructor(paiementRepo, BCRepo) {
        this.paiementRepo = paiementRepo;
        this.BCRepo = BCRepo;
    }
    async create(idBC, createPaiementDto) {
        const verifBC = await this.BCRepo.findOne({ where: { id: idBC } });
        if (!verifBC)
            throw new common_1.NotFoundException('BC not found');
        let randomNumTrans = '';
        const character = "0123456789";
        for (let i = 0; i < 5; i++) {
            const random = Math.floor(Math.random() * character.length);
            randomNumTrans += character.charAt(random);
        }
        const data = this.paiementRepo.create({
            ...createPaiementDto,
            NumTransaction: randomNumTrans,
            Montant: verifBC.TotalPrice,
            Bon_Commande: verifBC
        });
        return await this.paiementRepo.save(data);
    }
    findAll() {
        return this.paiementRepo.find();
    }
    async findOne(id) {
        const verifPaiement = await this.paiementRepo.findOne({ where: { id } });
        if (!verifPaiement)
            throw new common_1.NotFoundException('Cette payement n existe pas');
        return await this.paiementRepo.findOneBy({ id });
    }
    findOneUser(id) {
        return `This action returns a #${id} paiement`;
    }
    async update(id, updatePaiementDto) {
        const verifPaiement = await this.paiementRepo.findOne({ where: { id } });
        if (!verifPaiement)
            throw new common_1.NotFoundException('Cette payement n existe pas');
        const data = this.paiementRepo.create({
            ...updatePaiementDto,
            Status: 'Payé'
        });
        await this.paiementRepo.update(id, data);
        return {
            message: 'Status à jours'
        };
    }
    remove(id) {
        return this.paiementRepo.delete(id);
    }
};
exports.PaiementService = PaiementService;
exports.PaiementService = PaiementService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(paiement_entity_1.Paiement)),
    __param(1, (0, typeorm_1.InjectRepository)(bon_commande_entity_1.BonCommande)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], PaiementService);
//# sourceMappingURL=paiement.service.js.map