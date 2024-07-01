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
exports.FavorisController = void 0;
const common_1 = require("@nestjs/common");
const favoris_service_1 = require("./favoris.service");
const create_favoris_dto_1 = require("./dto/create-favoris.dto");
const update_favoris_dto_1 = require("./dto/update-favoris.dto");
const swagger_1 = require("@nestjs/swagger");
let FavorisController = class FavorisController {
    constructor(favorisService) {
        this.favorisService = favorisService;
    }
    create(createFavorisDto) {
        return this.favorisService.create(createFavorisDto);
    }
    findAll() {
        return this.favorisService.findAll();
    }
    findOne(id) {
        return this.favorisService.findOne(+id);
    }
    update(id, updateFavorisDto) {
        return this.favorisService.update(+id, updateFavorisDto);
    }
    remove(id) {
        return this.favorisService.remove(+id);
    }
};
exports.FavorisController = FavorisController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_favoris_dto_1.CreateFavorisDto]),
    __metadata("design:returntype", void 0)
], FavorisController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FavorisController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FavorisController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_favoris_dto_1.UpdateFavorisDto]),
    __metadata("design:returntype", void 0)
], FavorisController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FavorisController.prototype, "remove", null);
exports.FavorisController = FavorisController = __decorate([
    (0, swagger_1.ApiTags)('FAVORIS'),
    (0, common_1.Controller)('favoris'),
    __metadata("design:paramtypes", [favoris_service_1.FavorisService])
], FavorisController);
//# sourceMappingURL=favoris.controller.js.map