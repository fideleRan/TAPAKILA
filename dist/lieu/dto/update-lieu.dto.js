"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLieuDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_lieu_dto_1 = require("./create-lieu.dto");
class UpdateLieuDto extends (0, swagger_1.PartialType)(create_lieu_dto_1.CreateLieuDto) {
}
exports.UpdateLieuDto = UpdateLieuDto;
//# sourceMappingURL=update-lieu.dto.js.map