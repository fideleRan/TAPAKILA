"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFanDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_fan_dto_1 = require("./create-fan.dto");
class UpdateFanDto extends (0, swagger_1.PartialType)(create_fan_dto_1.CreateUserDto) {
}
exports.UpdateFanDto = UpdateFanDto;
//# sourceMappingURL=update-fan.dto.js.map