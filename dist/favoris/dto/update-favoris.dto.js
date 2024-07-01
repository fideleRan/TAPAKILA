"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFavorisDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_favoris_dto_1 = require("./create-favoris.dto");
class UpdateFavorisDto extends (0, swagger_1.PartialType)(create_favoris_dto_1.CreateFavorisDto) {
}
exports.UpdateFavorisDto = UpdateFavorisDto;
//# sourceMappingURL=update-favoris.dto.js.map