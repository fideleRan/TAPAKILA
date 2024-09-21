"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavorisModule = void 0;
const common_1 = require("@nestjs/common");
const favoris_service_1 = require("./favoris.service");
const favoris_controller_1 = require("./favoris.controller");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../USER/entities/user.entity");
const event_entity_1 = require("../event/entities/event.entity");
const favoris_entity_1 = require("./entities/favoris.entity");
let FavorisModule = class FavorisModule {
};
exports.FavorisModule = FavorisModule;
exports.FavorisModule = FavorisModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([
                favoris_entity_1.Favoris,
                event_entity_1.Event,
                user_entity_1.User
            ])],
        controllers: [favoris_controller_1.FavorisController],
        providers: [favoris_service_1.FavorisService],
    })
], FavorisModule);
//# sourceMappingURL=favoris.module.js.map