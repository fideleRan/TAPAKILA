"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBonCommandeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_bon_commande_dto_1 = require("./create-bon_commande.dto");
class UpdateBonCommandeDto extends (0, swagger_1.PartialType)(create_bon_commande_dto_1.CreateBonCommandeDto) {
}
exports.UpdateBonCommandeDto = UpdateBonCommandeDto;
//# sourceMappingURL=update-bon_commande.dto.js.map