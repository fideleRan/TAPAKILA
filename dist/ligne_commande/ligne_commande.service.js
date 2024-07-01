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
exports.LigneCommandeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const bon_commande_entity_1 = require("../bon_commande/entities/bon_commande.entity");
const typeorm_2 = require("typeorm");
const ligne_commande_entity_1 = require("./entities/ligne_commande.entity");
const type_billet_entity_1 = require("../type-billet/entities/type-billet.entity");
let LigneCommandeService = class LigneCommandeService {
    constructor(lcRepo, bcRepo, tbRepo) {
        this.lcRepo = lcRepo;
        this.bcRepo = bcRepo;
        this.tbRepo = tbRepo;
    }
    async create(idBC, idTypeBillet, createLigneCommandeDto) {
        const verifBC = await this.bcRepo.findOne({ where: { id: idBC } });
        if (!verifBC)
            throw new common_1.NotFoundException('BC not found');
        const verifTB = await this.tbRepo.findOne({ where: { id: idTypeBillet } });
        if (!verifTB)
            throw new common_1.NotFoundException('TypeB not found');
        const nameB = verifTB.Name;
        const nbB = +createLigneCommandeDto.nbBillet;
        const unitPrice = +verifTB.Price;
        const dataLC = await this.lcRepo.create({
            ...createLigneCommandeDto,
            nameBillet: nameB,
            nbBillet: nbB,
            pu: unitPrice,
            pt: unitPrice * nbB,
            Bon_Commande: verifBC,
            Type_Billet: verifTB
        });
        await this.lcRepo.save(dataLC);
        return { status: 200, message: 'Ligne de commande ajouté' };
    }
    findAll() {
        return this.lcRepo.find();
    }
    findOne(id) {
        return `This action returns a #${id} ligneCommande`;
    }
    async update(id, updateLigneCommandeDto) {
        const verifLC = await this.lcRepo.findOne({ where: { id } });
        if (!verifLC)
            throw new common_1.NotFoundException('Row not found');
        const dataToUpdate = this.lcRepo.create({
            ...updateLigneCommandeDto,
            nbBillet: updateLigneCommandeDto.nbBillet
        });
        await this.lcRepo.update(id, dataToUpdate);
        return { status: 200, message: "Nb de billet à jours" };
    }
    async remove(id) {
        const verifLC = await this.lcRepo.findOne({ where: { id } });
        if (!verifLC)
            throw new common_1.NotFoundException('Row not found');
        await this.lcRepo.delete(id);
        return { status: 200, message: "Row deleted" };
    }
};
exports.LigneCommandeService = LigneCommandeService;
exports.LigneCommandeService = LigneCommandeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(ligne_commande_entity_1.LigneCommande)),
    __param(1, (0, typeorm_1.InjectRepository)(bon_commande_entity_1.BonCommande)),
    __param(2, (0, typeorm_1.InjectRepository)(type_billet_entity_1.TypeBillet)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], LigneCommandeService);
//# sourceMappingURL=ligne_commande.service.js.map