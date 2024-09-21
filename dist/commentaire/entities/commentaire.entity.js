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
exports.Commentaire = void 0;
const event_entity_1 = require("../../event/entities/event.entity");
const user_entity_1 = require("../../USER/entities/user.entity");
const typeorm_1 = require("typeorm");
let Commentaire = class Commentaire {
};
exports.Commentaire = Commentaire;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Commentaire.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Commentaire.prototype, "Message", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "datetime", default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], Commentaire.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => event_entity_1.Event, ev => ev.Commentaire, {
        onDelete: "CASCADE",
        onUpdate: 'CASCADE',
        orphanedRowAction: 'delete',
        eager: true
    }),
    __metadata("design:type", Object)
], Commentaire.prototype, "Event", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, ev => ev.Commentaire, {
        onDelete: "CASCADE",
        onUpdate: 'CASCADE',
        orphanedRowAction: 'delete',
        eager: true
    }),
    __metadata("design:type", Object)
], Commentaire.prototype, "User", void 0);
exports.Commentaire = Commentaire = __decorate([
    (0, typeorm_1.Entity)('Commentaire')
], Commentaire);
//# sourceMappingURL=commentaire.entity.js.map