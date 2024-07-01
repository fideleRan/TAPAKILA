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
exports.BonCommande = void 0;
const event_entity_1 = require("../../event/entities/event.entity");
const ligne_commande_entity_1 = require("../../ligne_commande/entities/ligne_commande.entity");
const user_entity_1 = require("../../USER/entities/user.entity");
const typeorm_1 = require("typeorm");
let BonCommande = class BonCommande {
};
exports.BonCommande = BonCommande;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], BonCommande.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], BonCommande.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], BonCommande.prototype, "heure", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], BonCommande.prototype, "totalPrice", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], BonCommande.prototype, "qrCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], BonCommande.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_entity_1.User, usr => usr.Bon_Commande, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        orphanedRowAction: 'delete',
        eager: true
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Object)
], BonCommande.prototype, "User", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => event_entity_1.Event, evt => evt.Bon_Commande, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        orphanedRowAction: 'delete',
        eager: true
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Object)
], BonCommande.prototype, "Event", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ligne_commande_entity_1.LigneCommande, lc => lc.Bon_Commande, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        orphanedRowAction: 'delete',
        eager: true
    }),
    __metadata("design:type", Object)
], BonCommande.prototype, "Ligne_Commande", void 0);
exports.BonCommande = BonCommande = __decorate([
    (0, typeorm_1.Entity)('bon_commande')
], BonCommande);
//# sourceMappingURL=bon_commande.entity.js.map