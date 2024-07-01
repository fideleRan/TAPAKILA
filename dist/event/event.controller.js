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
exports.EventController = void 0;
const common_1 = require("@nestjs/common");
const event_service_1 = require("./event.service");
const create_event_dto_1 = require("./dto/create-event.dto");
const update_event_dto_1 = require("./dto/update-event.dto");
const swagger_1 = require("@nestjs/swagger");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const fileInterceptor_1 = require("../interceptor/fileInterceptor");
let EventController = class EventController {
    constructor(eventService) {
        this.eventService = eventService;
    }
    create(IdOrganisateur, createEventDto) {
        return this.eventService.create(+IdOrganisateur, createEventDto);
    }
    findAll() {
        return this.eventService.findAll();
    }
    findOne(id) {
        return this.eventService.findOne(+id);
    }
    update(id, updateEventDto, Photo) {
        const dataEvent = {
            ...updateEventDto,
            Photo: Photo.filename
        };
        return this.eventService.update(+id, dataEvent);
    }
    updateDate(id, updateEventDto) {
        return this.eventService.updateDate(+id, updateEventDto);
    }
    updateLieu(id, updateEventDto) {
        return this.eventService.updateLieu(+id, updateEventDto);
    }
    updateDesc(id, updateEventDto) {
        return this.eventService.updateDesc(+id, updateEventDto);
    }
    updatePhoto(id, updateEventDto, file) {
        const data = {
            ...updateEventDto,
            Photo: file.filename
        };
        return this.eventService.updatePhoto(+id, data);
    }
    remove(id) {
        return this.eventService.remove(+id);
    }
};
exports.EventController = EventController;
__decorate([
    (0, common_1.Post)('Info/:IdOrganisateur'),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                Name: { type: 'string' },
                Tag: { type: 'string' },
                Cathegory: { type: 'string' },
            }
        }
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.NoFilesInterceptor)()),
    __param(0, (0, common_1.Param)('IdOrganisateur')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_event_dto_1.CreateEventDto]),
    __metadata("design:returntype", void 0)
], EventController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EventController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EventController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                Name: { type: 'string' },
                Description: { type: 'string' },
                Tag: { type: 'string' },
                Cathegory: { type: 'string' },
                Date_Debut: { type: 'string' },
                Date_Fin: { type: 'string' },
                Heure_Debut: { type: 'string' },
                Heure_Fin: { type: 'string' },
                Status: { type: 'string' },
                Photo: { type: 'file' },
                Lieu: { type: 'number' }
            }
        }
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('Photo', {
        storage: (0, multer_1.diskStorage)({
            destination: "public/photo/event",
            filename: fileInterceptor_1.eventInterceptor
        })
    })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_event_dto_1.UpdateEventDto, Object]),
    __metadata("design:returntype", void 0)
], EventController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)('Date/:id'),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                Date_Debut: { type: 'string' },
                Date_Fin: { type: 'string' },
                Heure_Debut: { type: 'string' },
                Heure_Fin: { type: 'string' },
            }
        }
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.NoFilesInterceptor)()),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_event_dto_1.UpdateEventDto]),
    __metadata("design:returntype", void 0)
], EventController.prototype, "updateDate", null);
__decorate([
    (0, common_1.Patch)('Lieu/:id'),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                Lieu: { type: 'number' },
            }
        }
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.NoFilesInterceptor)()),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_event_dto_1.UpdateEventDto]),
    __metadata("design:returntype", void 0)
], EventController.prototype, "updateLieu", null);
__decorate([
    (0, common_1.Patch)('Description/:id'),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                Description: { type: 'string' },
            }
        }
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.NoFilesInterceptor)()),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_event_dto_1.UpdateEventDto]),
    __metadata("design:returntype", void 0)
], EventController.prototype, "updateDesc", null);
__decorate([
    (0, common_1.Patch)('Photo/:id'),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                Photo: { type: 'file' },
            }
        }
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('Photo', {
        storage: (0, multer_1.diskStorage)({
            destination: "public/photo/event",
            filename: fileInterceptor_1.eventInterceptor
        })
    })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_event_dto_1.UpdateEventDto, Object]),
    __metadata("design:returntype", void 0)
], EventController.prototype, "updatePhoto", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EventController.prototype, "remove", null);
exports.EventController = EventController = __decorate([
    (0, swagger_1.ApiTags)('EVENT'),
    (0, common_1.Controller)('event'),
    __metadata("design:paramtypes", [event_service_1.EventService])
], EventController);
//# sourceMappingURL=event.controller.js.map