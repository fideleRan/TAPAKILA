"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrganisateurDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_organisateur_dto_1 = require("./create-organisateur.dto");
class UpdateOrganisateurDto extends (0, swagger_1.PartialType)(create_organisateur_dto_1.CreateOrganisateurDto) {
}
exports.UpdateOrganisateurDto = UpdateOrganisateurDto;
//# sourceMappingURL=update-organisateur.dto.js.map