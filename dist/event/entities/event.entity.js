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
exports.Event = void 0;
const bon_commande_entity_1 = require("../../bon_commande/entities/bon_commande.entity");
const commentaire_entity_1 = require("../../commentaire/entities/commentaire.entity");
const favoris_entity_1 = require("../../favoris/entities/favoris.entity");
const lieu_entity_1 = require("../../lieu/entities/lieu.entity");
const organisateur_entity_1 = require("../../organisateur/entities/organisateur.entity");
const type_billet_entity_1 = require("../../type-billet/entities/type-billet.entity");
const typeorm_1 = require("typeorm");
let Event = class Event {
};
exports.Event = Event;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Event.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Event.prototype, "Name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Event.prototype, "Description", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Event.prototype, "Tag", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Event.prototype, "Cathegory", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Event.prototype, "Date_Debut", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Event.prototype, "Date_Fin", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Event.prototype, "Heure_Debut", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Event.prototype, "Heure_Fin", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Event.prototype, "Age", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Event.prototype, "Etoile", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: "A venir" }),
    __metadata("design:type", String)
], Event.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Event.prototype, "Photo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => organisateur_entity_1.Organisateur, org => org.Event, {
        onDelete: 'CASCADE',
        onUpdate: "CASCADE",
        orphanedRowAction: 'nullify',
        eager: true
    }),
    __metadata("design:type", Object)
], Event.prototype, "Organisateur", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => type_billet_entity_1.TypeBillet, tb => tb.Event, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        orphanedRowAction: "delete"
    }),
    __metadata("design:type", Object)
], Event.prototype, "Type_Billet", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => commentaire_entity_1.Commentaire, tb => tb.Event, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        orphanedRowAction: "nullify"
    }),
    __metadata("design:type", Object)
], Event.prototype, "Commentaire", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => bon_commande_entity_1.BonCommande, bc => bc.Event, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        orphanedRowAction: 'nullify'
    }),
    __metadata("design:type", Object)
], Event.prototype, "Bon_Commande", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => lieu_entity_1.Lieu, lieu => lieu.Event, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        orphanedRowAction: 'nullify',
        eager: true
    }),
    __metadata("design:type", Object)
], Event.prototype, "Lieu", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => favoris_entity_1.Favoris, ev => ev.Event, {
        onDelete: "CASCADE",
        onUpdate: 'CASCADE',
        orphanedRowAction: 'nullify'
    }),
    __metadata("design:type", Object)
], Event.prototype, "Favoris", void 0);
exports.Event = Event = __decorate([
    (0, typeorm_1.Entity)('event')
], Event);
//# sourceMappingURL=event.entity.js.map