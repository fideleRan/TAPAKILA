"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavorisService = void 0;
const common_1 = require("@nestjs/common");
let FavorisService = class FavorisService {
    create(createFavorisDto) {
        return 'This action adds a new favoris';
    }
    findAll() {
        return `This action returns all favoris`;
    }
    findOne(id) {
        return `This action returns a #${id} favoris`;
    }
    update(id, updateFavorisDto) {
        return `This action updates a #${id} favoris`;
    }
    remove(id) {
        return `This action removes a #${id} favoris`;
    }
};
exports.FavorisService = FavorisService;
exports.FavorisService = FavorisService = __decorate([
    (0, common_1.Injectable)()
], FavorisService);
//# sourceMappingURL=favoris.service.js.map