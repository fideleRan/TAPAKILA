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
exports.PaiementController = void 0;
const common_1 = require("@nestjs/common");
const paiement_service_1 = require("./paiement.service");
const create_paiement_dto_1 = require("./dto/create-paiement.dto");
const update_paiement_dto_1 = require("./dto/update-paiement.dto");
const swagger_1 = require("@nestjs/swagger");
const platform_express_1 = require("@nestjs/platform-express");
let PaiementController = class PaiementController {
    constructor(paiementService) {
        this.paiementService = paiementService;
    }
    create(idBC, createPaiementDto) {
        return this.paiementService.create(+idBC, createPaiementDto);
    }
    findAll() {
        return this.paiementService.findAll();
    }
    findOne(id) {
        return this.paiementService.findOne(+id);
    }
    findOneUser(id) {
        return this.paiementService.findOneUser(+id);
    }
    update(id, updatePaiementDto) {
        return this.paiementService.update(+id, updatePaiementDto);
    }
    remove(id) {
        return this.paiementService.remove(+id);
    }
};
exports.PaiementController = PaiementController;
__decorate([
    (0, common_1.Post)('/:idBC'),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                Mode: { type: 'string' },
                QRcode: { type: 'string' }
            }
        }
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.NoFilesInterceptor)()),
    __param(0, (0, common_1.Param)('idBC')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_paiement_dto_1.CreatePaiementDto]),
    __metadata("design:returntype", void 0)
], PaiementController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PaiementController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PaiementController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('/user/:idUser'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PaiementController.prototype, "findOneUser", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.NoFilesInterceptor)()),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_paiement_dto_1.UpdatePaiementDto]),
    __metadata("design:returntype", void 0)
], PaiementController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PaiementController.prototype, "remove", null);
exports.PaiementController = PaiementController = __decorate([
    (0, swagger_1.ApiTags)('PAIEMENT'),
    (0, common_1.Controller)('paiement'),
    __metadata("design:paramtypes", [paiement_service_1.PaiementService])
], PaiementController);
//# sourceMappingURL=paiement.controller.js.map