"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventModule = void 0;
const common_1 = require("@nestjs/common");
const event_service_1 = require("./event.service");
const event_controller_1 = require("./event.controller");
const typeorm_1 = require("@nestjs/typeorm");
const event_entity_1 = require("./entities/event.entity");
const organisateur_entity_1 = require("../organisateur/entities/organisateur.entity");
const lieu_entity_1 = require("../lieu/entities/lieu.entity");
let EventModule = class EventModule {
};
exports.EventModule = EventModule;
exports.EventModule = EventModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([
                event_entity_1.Event,
                organisateur_entity_1.Organisateur,
                lieu_entity_1.Lieu
            ])],
        controllers: [event_controller_1.EventController],
        providers: [event_service_1.EventService],
    })
], EventModule);
//# sourceMappingURL=event.module.js.map