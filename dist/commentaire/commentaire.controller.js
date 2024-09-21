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
exports.CommentaireController = void 0;
const common_1 = require("@nestjs/common");
const commentaire_service_1 = require("./commentaire.service");
const create_commentaire_dto_1 = require("./dto/create-commentaire.dto");
const update_commentaire_dto_1 = require("./dto/update-commentaire.dto");
const swagger_1 = require("@nestjs/swagger");
const platform_express_1 = require("@nestjs/platform-express");
let CommentaireController = class CommentaireController {
    constructor(commentaireService) {
        this.commentaireService = commentaireService;
    }
    create(idEvent, idUser, createCommentaireDto) {
        return this.commentaireService.create(+idEvent, +idUser, createCommentaireDto);
    }
    findAll() {
        return this.commentaireService.findAll();
    }
    findOne(id) {
        return this.commentaireService.findOne(+id);
    }
    update(id, updateCommentaireDto) {
        return this.commentaireService.update(+id, updateCommentaireDto);
    }
    remove(id) {
        return this.commentaireService.remove(+id);
    }
};
exports.CommentaireController = CommentaireController;
__decorate([
    (0, common_1.Post)('/:idEvent/:idUser'),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                Message: { type: 'string' },
            }
        }
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.NoFilesInterceptor)()),
    __param(0, (0, common_1.Param)('idEvent')),
    __param(1, (0, common_1.Param)('idUser')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, create_commentaire_dto_1.CreateCommentaireDto]),
    __metadata("design:returntype", void 0)
], CommentaireController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CommentaireController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CommentaireController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                Message: { type: 'string' },
            }
        }
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.NoFilesInterceptor)()),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_commentaire_dto_1.UpdateCommentaireDto]),
    __metadata("design:returntype", void 0)
], CommentaireController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CommentaireController.prototype, "remove", null);
exports.CommentaireController = CommentaireController = __decorate([
    (0, swagger_1.ApiTags)('COMMENTAIRE'),
    (0, common_1.Controller)('commentaire'),
    __metadata("design:paramtypes", [commentaire_service_1.CommentaireService])
], CommentaireController);
//# sourceMappingURL=commentaire.controller.js.map