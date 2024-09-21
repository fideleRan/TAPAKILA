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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LigneCommande = void 0;
const bon_commande_entity_1 = require("../../bon_commande/entities/bon_commande.entity");
const type_billet_entity_1 = require("../../type-billet/entities/type-billet.entity");
const typeorm_1 = require("typeorm");
let LigneCommande = class LigneCommande {
};
exports.LigneCommande = LigneCommande;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], LigneCommande.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], LigneCommande.prototype, "nameBillet", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], LigneCommande.prototype, "nbBillet", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], LigneCommande.prototype, "pu", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], LigneCommande.prototype, "montant", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => bon_commande_entity_1.BonCommande, bc => bc.Ligne_Commande, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        orphanedRowAction: 'delete'
    }),
    __metadata("design:type", Object)
], LigneCommande.prototype, "Bon_Commande", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => type_billet_entity_1.TypeBillet, tb => tb.Ligne_Commande, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        orphanedRowAction: 'delete',
        eager: true
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Object)
], LigneCommande.prototype, "Type_Billet", void 0);
exports.LigneCommande = LigneCommande = __decorate([
    (0, typeorm_1.Entity)('ligne_commande')
], LigneCommande);
//# sourceMappingURL=ligne_commande.entity.js.map