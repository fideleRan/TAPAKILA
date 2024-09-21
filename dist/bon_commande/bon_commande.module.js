"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BonCommandeModule = void 0;
const common_1 = require("@nestjs/common");
const bon_commande_service_1 = require("./bon_commande.service");
const bon_commande_controller_1 = require("./bon_commande.controller");
const bon_commande_entity_1 = require("./entities/bon_commande.entity");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../USER/entities/user.entity");
const event_entity_1 = require("../event/entities/event.entity");
const type_billet_entity_1 = require("../type-billet/entities/type-billet.entity");
let BonCommandeModule = class BonCommandeModule {
};
exports.BonCommandeModule = BonCommandeModule;
exports.BonCommandeModule = BonCommandeModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([
                bon_commande_entity_1.BonCommande,
                event_entity_1.Event,
                user_entity_1.User,
                type_billet_entity_1.TypeBillet
            ])],
        controllers: [bon_commande_controller_1.BonCommandeController],
        providers: [bon_commande_service_1.BonCommandeService],
    })
], BonCommandeModule);
//# sourceMappingURL=bon_commande.module.js.map