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
exports.Organisateur = void 0;
const event_entity_1 = require("../../event/entities/event.entity");
const typeorm_1 = require("typeorm");
let Organisateur = class Organisateur {
};
exports.Organisateur = Organisateur;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Organisateur.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Organisateur.prototype, "Name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Organisateur.prototype, "Username", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Organisateur.prototype, "Password", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Organisateur.prototype, "Email", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Organisateur.prototype, "Tel", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Organisateur.prototype, "SiteWeb", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Organisateur.prototype, "Profile", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'ORGANISATEUR' }),
    __metadata("design:type", String)
], Organisateur.prototype, "Role", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => event_entity_1.Event, ev => ev.Organisateur, {
        onDelete: "CASCADE",
        onUpdate: 'CASCADE',
        orphanedRowAction: 'delete'
    }),
    __metadata("design:type", Object)
], Organisateur.prototype, "Event", void 0);
exports.Organisateur = Organisateur = __decorate([
    (0, typeorm_1.Entity)('organisateur')
], Organisateur);
//# sourceMappingURL=organisateur.entity.js.map