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
exports.TypeBilletController = void 0;
const common_1 = require("@nestjs/common");
const type_billet_service_1 = require("./type-billet.service");
const create_type_billet_dto_1 = require("./dto/create-type-billet.dto");
const update_type_billet_dto_1 = require("./dto/update-type-billet.dto");
const swagger_1 = require("@nestjs/swagger");
const platform_express_1 = require("@nestjs/platform-express");
let TypeBilletController = class TypeBilletController {
    constructor(typeBilletService) {
        this.typeBilletService = typeBilletService;
    }
    create(idEvent, createTypeBilletDto) {
        return this.typeBilletService.create(+idEvent, createTypeBilletDto);
    }
    findOne(id) {
        return this.typeBilletService.findOne(+id);
    }
    update(id, updateTypeBilletDto) {
        return this.typeBilletService.update(+id, updateTypeBilletDto);
    }
    remove(id) {
        return this.typeBilletService.remove(+id);
    }
};
exports.TypeBilletController = TypeBilletController;
__decorate([
    (0, common_1.Post)(':idEvent'),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                Name: { type: 'string' },
                Price: { type: 'number' },
                nbTotal: { type: 'number' },
            }
        }
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.NoFilesInterceptor)()),
    __param(0, (0, common_1.Param)('idEvent')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_type_billet_dto_1.CreateTypeBilletDto]),
    __metadata("design:returntype", void 0)
], TypeBilletController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':idEvent'),
    __param(0, (0, common_1.Param)('idEvent')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TypeBilletController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_type_billet_dto_1.UpdateTypeBilletDto]),
    __metadata("design:returntype", void 0)
], TypeBilletController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TypeBilletController.prototype, "remove", null);
exports.TypeBilletController = TypeBilletController = __decorate([
    (0, swagger_1.ApiTags)('TYPE-BILLET'),
    (0, common_1.Controller)('type-billet'),
    __metadata("design:paramtypes", [type_billet_service_1.TypeBilletService])
], TypeBilletController);
//# sourceMappingURL=type-billet.controller.js.map