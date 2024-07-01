"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LigneCommandeModule = void 0;
const common_1 = require("@nestjs/common");
const ligne_commande_service_1 = require("./ligne_commande.service");
const ligne_commande_controller_1 = require("./ligne_commande.controller");
const typeorm_1 = require("@nestjs/typeorm");
const bon_commande_entity_1 = require("../bon_commande/entities/bon_commande.entity");
const type_billet_entity_1 = require("../type-billet/entities/type-billet.entity");
const ligne_commande_entity_1 = require("./entities/ligne_commande.entity");
let LigneCommandeModule = class LigneCommandeModule {
};
exports.LigneCommandeModule = LigneCommandeModule;
exports.LigneCommandeModule = LigneCommandeModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([
                type_billet_entity_1.TypeBillet,
                bon_commande_entity_1.BonCommande,
                ligne_commande_entity_1.LigneCommande
            ])],
        controllers: [ligne_commande_controller_1.LigneCommandeController],
        providers: [ligne_commande_service_1.LigneCommandeService],
    })
], LigneCommandeModule);
//# sourceMappingURL=ligne_commande.module.js.map