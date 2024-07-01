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
exports.LieuController = void 0;
const common_1 = require("@nestjs/common");
const lieu_service_1 = require("./lieu.service");
const create_lieu_dto_1 = require("./dto/create-lieu.dto");
const update_lieu_dto_1 = require("./dto/update-lieu.dto");
const swagger_1 = require("@nestjs/swagger");
const platform_express_1 = require("@nestjs/platform-express");
let LieuController = class LieuController {
    constructor(lieuService) {
        this.lieuService = lieuService;
    }
    create(createLieuDto) {
        return this.lieuService.create(createLieuDto);
    }
    findAll() {
        return this.lieuService.findAll();
    }
    findOne(id) {
        return this.lieuService.findOne(+id);
    }
    update(id, updateLieuDto) {
        return this.lieuService.update(+id, updateLieuDto);
    }
    remove(id) {
        return this.lieuService.remove(+id);
    }
};
exports.LieuController = LieuController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                Name: { type: 'string' },
                Description: { type: 'string' },
                Adresse: { type: 'string' },
                CapaciteMax: { type: 'number' },
                Localisation: { type: 'string' }
            }
        }
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.NoFilesInterceptor)()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_lieu_dto_1.CreateLieuDto]),
    __metadata("design:returntype", void 0)
], LieuController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LieuController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LieuController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                Name: { type: 'string' },
                Description: { type: 'string' },
                Adresse: { type: 'number' },
                CapaciteMax: { type: 'string' },
                Localisation: { type: 'string' }
            }
        }
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.NoFilesInterceptor)()),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_lieu_dto_1.UpdateLieuDto]),
    __metadata("design:returntype", void 0)
], LieuController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LieuController.prototype, "remove", null);
exports.LieuController = LieuController = __decorate([
    (0, swagger_1.ApiTags)('LIEU'),
    (0, common_1.Controller)('lieu'),
    __metadata("design:paramtypes", [lieu_service_1.LieuService])
], LieuController);
//# sourceMappingURL=lieu.controller.js.map