"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaiementModule = void 0;
const common_1 = require("@nestjs/common");
const paiement_service_1 = require("./paiement.service");
const paiement_controller_1 = require("./paiement.controller");
const typeorm_1 = require("@nestjs/typeorm");
const paiement_entity_1 = require("./entities/paiement.entity");
const bon_commande_entity_1 = require("../bon_commande/entities/bon_commande.entity");
let PaiementModule = class PaiementModule {
};
exports.PaiementModule = PaiementModule;
exports.PaiementModule = PaiementModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                paiement_entity_1.Paiement,
                bon_commande_entity_1.BonCommande
            ])
        ],
        controllers: [paiement_controller_1.PaiementController],
        providers: [paiement_service_1.PaiementService],
    })
], PaiementModule);
//# sourceMappingURL=paiement.module.js.map