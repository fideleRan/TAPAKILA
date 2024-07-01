"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeBilletModule = void 0;
const common_1 = require("@nestjs/common");
const type_billet_service_1 = require("./type-billet.service");
const type_billet_controller_1 = require("./type-billet.controller");
const typeorm_1 = require("@nestjs/typeorm");
const type_billet_entity_1 = require("./entities/type-billet.entity");
const event_entity_1 = require("../event/entities/event.entity");
let TypeBilletModule = class TypeBilletModule {
};
exports.TypeBilletModule = TypeBilletModule;
exports.TypeBilletModule = TypeBilletModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([
                type_billet_entity_1.TypeBillet,
                event_entity_1.Event
            ])],
        controllers: [type_billet_controller_1.TypeBilletController],
        providers: [type_billet_service_1.TypeBilletService],
    })
], TypeBilletModule);
//# sourceMappingURL=type-billet.module.js.map