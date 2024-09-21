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
exports.BonCommandeController = void 0;
const common_1 = require("@nestjs/common");
const bon_commande_service_1 = require("./bon_commande.service");
const create_bon_commande_dto_1 = require("./dto/create-bon_commande.dto");
const update_bon_commande_dto_1 = require("./dto/update-bon_commande.dto");
const swagger_1 = require("@nestjs/swagger");
const platform_express_1 = require("@nestjs/platform-express");
let BonCommandeController = class BonCommandeController {
    constructor(bonCommandeService) {
        this.bonCommandeService = bonCommandeService;
    }
    create(idEvent, idUser, idBillet, createBonCommandeDto) {
        return this.bonCommandeService.create(+idEvent, +idUser, +idBillet, createBonCommandeDto);
    }
    findAll() {
        return this.bonCommandeService.findAll();
    }
    findOne(id) {
        return this.bonCommandeService.findOne(+id);
    }
    findOneByUser(id) {
        return this.bonCommandeService.findOneByUser(+id);
    }
    findOneByEvent(id) {
        return this.bonCommandeService.findOneByEvent(+id);
    }
    update(id, updateBonCommandeDto) {
        return this.bonCommandeService.update(+id, updateBonCommandeDto);
    }
    remove(id) {
        return this.bonCommandeService.remove(+id);
    }
};
exports.BonCommandeController = BonCommandeController;
__decorate([
    (0, common_1.Post)(":idEvent/:idUser/:idBillet"),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                TotalPrice: { type: 'number' },
                nbPlace: { type: 'number' }
            }
        }
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.NoFilesInterceptor)()),
    __param(0, (0, common_1.Param)('idEvent')),
    __param(1, (0, common_1.Param)('idUser')),
    __param(2, (0, common_1.Param)('idBillet')),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, create_bon_commande_dto_1.CreateBonCommandeDto]),
    __metadata("design:returntype", void 0)
], BonCommandeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BonCommandeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BonCommandeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('user/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BonCommandeController.prototype, "findOneByUser", null);
__decorate([
    (0, common_1.Get)('event/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BonCommandeController.prototype, "findOneByEvent", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_bon_commande_dto_1.UpdateBonCommandeDto]),
    __metadata("design:returntype", void 0)
], BonCommandeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BonCommandeController.prototype, "remove", null);
exports.BonCommandeController = BonCommandeController = __decorate([
    (0, swagger_1.ApiTags)('BON COMMANDE'),
    (0, common_1.Controller)('bon-commande'),
    __metadata("design:paramtypes", [bon_commande_service_1.BonCommandeService])
], BonCommandeController);
//# sourceMappingURL=bon_commande.controller.js.map