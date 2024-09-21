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
exports.Paiement = void 0;
const bon_commande_entity_1 = require("../../bon_commande/entities/bon_commande.entity");
const typeorm_1 = require("typeorm");
let Paiement = class Paiement {
};
exports.Paiement = Paiement;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Paiement.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], Paiement.prototype, "Montant", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "datetime", default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], Paiement.prototype, "Date", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Paiement.prototype, "Mode", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: ' ' }),
    __metadata("design:type", String)
], Paiement.prototype, "Tel", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Paiement.prototype, "NumTransaction", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'en attente' }),
    __metadata("design:type", String)
], Paiement.prototype, "Status", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '', length: 8000 }),
    __metadata("design:type", String)
], Paiement.prototype, "QRcode", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => bon_commande_entity_1.BonCommande, bc => bc.Paiement, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        orphanedRowAction: 'delete',
        eager: true
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Object)
], Paiement.prototype, "Bon_Commande", void 0);
exports.Paiement = Paiement = __decorate([
    (0, typeorm_1.Entity)('paiement')
], Paiement);
//# sourceMappingURL=paiement.entity.js.map