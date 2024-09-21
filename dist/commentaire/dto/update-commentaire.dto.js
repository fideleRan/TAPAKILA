"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCommentaireDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_commentaire_dto_1 = require("./create-commentaire.dto");
class UpdateCommentaireDto extends (0, swagger_1.PartialType)(create_commentaire_dto_1.CreateCommentaireDto) {
}
exports.UpdateCommentaireDto = UpdateCommentaireDto;
//# sourceMappingURL=update-commentaire.dto.js.map