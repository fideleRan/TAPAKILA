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
exports.LigneCommandeController = void 0;
const common_1 = require("@nestjs/common");
const ligne_commande_service_1 = require("./ligne_commande.service");
const create_ligne_commande_dto_1 = require("./dto/create-ligne_commande.dto");
const update_ligne_commande_dto_1 = require("./dto/update-ligne_commande.dto");
const swagger_1 = require("@nestjs/swagger");
const platform_express_1 = require("@nestjs/platform-express");
let LigneCommandeController = class LigneCommandeController {
    constructor(ligneCommandeService) {
        this.ligneCommandeService = ligneCommandeService;
    }
    create(idBC, idTypeBillet, createLigneCommandeDto) {
        return this.ligneCommandeService.create(+idBC, +idTypeBillet, createLigneCommandeDto);
    }
    findAll() {
        return this.ligneCommandeService.findAll();
    }
    findOne(id) {
        return this.ligneCommandeService.findOne(+id);
    }
    update(id, updateLigneCommandeDto) {
        return this.ligneCommandeService.update(+id, updateLigneCommandeDto);
    }
    remove(id) {
        return this.ligneCommandeService.remove(+id);
    }
};
exports.LigneCommandeController = LigneCommandeController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                nbBillet: { type: 'number' },
            }
        }
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.NoFilesInterceptor)()),
    __param(0, (0, common_1.Query)('idBC')),
    __param(1, (0, common_1.Query)('idTypeBillet')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, create_ligne_commande_dto_1.CreateLigneCommandeDto]),
    __metadata("design:returntype", void 0)
], LigneCommandeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LigneCommandeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LigneCommandeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                nbBillet: { type: 'number' },
            }
        }
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.NoFilesInterceptor)()),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_ligne_commande_dto_1.UpdateLigneCommandeDto]),
    __metadata("design:returntype", void 0)
], LigneCommandeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LigneCommandeController.prototype, "remove", null);
exports.LigneCommandeController = LigneCommandeController = __decorate([
    (0, swagger_1.ApiTags)("LIGNE_COMMANDE"),
    (0, common_1.Controller)('ligne-commande'),
    __metadata("design:paramtypes", [ligne_commande_service_1.LigneCommandeService])
], LigneCommandeController);
//# sourceMappingURL=ligne_commande.controller.js.map