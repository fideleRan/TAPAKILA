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
exports.TypeBillet = void 0;
const event_entity_1 = require("../../event/entities/event.entity");
const ligne_commande_entity_1 = require("../../ligne_commande/entities/ligne_commande.entity");
const typeorm_1 = require("typeorm");
let TypeBillet = class TypeBillet {
};
exports.TypeBillet = TypeBillet;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TypeBillet.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], TypeBillet.prototype, "Name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], TypeBillet.prototype, "Price", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], TypeBillet.prototype, "nbTotal", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], TypeBillet.prototype, "nbVendu", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => event_entity_1.Event, ev => ev.Type_Billet, {
        onDelete: 'CASCADE',
        onUpdate: "CASCADE",
        orphanedRowAction: 'delete',
        eager: true
    }),
    __metadata("design:type", Object)
], TypeBillet.prototype, "Event", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => ligne_commande_entity_1.LigneCommande, lc => lc.Type_Billet, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        orphanedRowAction: 'nullify'
    }),
    __metadata("design:type", Object)
], TypeBillet.prototype, "Ligne_Commande", void 0);
exports.TypeBillet = TypeBillet = __decorate([
    (0, typeorm_1.Entity)("type_billet")
], TypeBillet);
//# sourceMappingURL=type-billet.entity.js.map