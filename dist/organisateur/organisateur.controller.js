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
exports.OrganisateurController = void 0;
const common_1 = require("@nestjs/common");
const organisateur_service_1 = require("./organisateur.service");
const create_organisateur_dto_1 = require("./dto/create-organisateur.dto");
const update_organisateur_dto_1 = require("./dto/update-organisateur.dto");
const swagger_1 = require("@nestjs/swagger");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const bcrypt = require("bcrypt");
const fileInterceptor_1 = require("../interceptor/fileInterceptor");
let OrganisateurController = class OrganisateurController {
    constructor(organisateurService) {
        this.organisateurService = organisateurService;
    }
    async register(createOrganisateurDto) {
        const hashedPassword = await bcrypt.hash(createOrganisateurDto.Password, 12);
        return this.organisateurService.register({ ...createOrganisateurDto, Password: hashedPassword });
    }
    async login(createOrganisateurDto) {
        return this.organisateurService.login(createOrganisateurDto);
    }
    findAll() {
        return this.organisateurService.findAll();
    }
    findOne(id) {
        return this.organisateurService.findOne(+id);
    }
    update(id, updateOrganisateurDto, Profile) {
        if (Profile) {
            updateOrganisateurDto.Profile = Profile.filename;
        }
        else {
            updateOrganisateurDto.Profile = updateOrganisateurDto.Profile;
        }
        return this.organisateurService.update(+id, updateOrganisateurDto);
    }
    remove(id) {
        return this.organisateurService.remove(+id);
    }
};
exports.OrganisateurController = OrganisateurController;
__decorate([
    (0, common_1.Post)('register'),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                Email: { type: 'string' },
                Password: { type: 'string' }
            }
        }
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.NoFilesInterceptor)()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_organisateur_dto_1.CreateOrganisateurDto]),
    __metadata("design:returntype", Promise)
], OrganisateurController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('login'),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                Email: { type: 'string' },
                Password: { type: 'string' }
            }
        }
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.NoFilesInterceptor)()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_organisateur_dto_1.CreateOrganisateurDto]),
    __metadata("design:returntype", Promise)
], OrganisateurController.prototype, "login", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrganisateurController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrganisateurController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                Name: { type: 'string', default: 'org' },
                Username: { type: 'string', default: 'org' },
                Email: { type: 'string' },
                Tel: { type: 'string' },
                SiteWeb: { type: 'string' },
                Profile: { type: 'file' }
            }
        }
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('Profile', {
        storage: (0, multer_1.diskStorage)({
            destination: "public/photo/profileOrg",
            filename: fileInterceptor_1.profileOrgInterceptor
        })
    })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_organisateur_dto_1.UpdateOrganisateurDto, Object]),
    __metadata("design:returntype", void 0)
], OrganisateurController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrganisateurController.prototype, "remove", null);
exports.OrganisateurController = OrganisateurController = __decorate([
    (0, swagger_1.ApiTags)('Organisateur'),
    (0, common_1.Controller)('organisateur'),
    __metadata("design:paramtypes", [organisateur_service_1.OrganisateurService])
], OrganisateurController);
//# sourceMappingURL=organisateur.controller.js.map