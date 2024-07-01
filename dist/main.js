"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const cookieParser = require("cookie-parser");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const options = new swagger_1.DocumentBuilder()
        .setTitle('TAPAKLA')
        .setDescription('TAPAKILA est un plateforme qui a préparer une evennement et de vendre les billet en ligne')
        .setVersion('1.0')
        .addServer('http://localhost:3000/', 'Local environnement')
        .addTag('API-Gestion de Ticket')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api-swagger-Tapakila', app, document);
    app.use(cookieParser());
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true }));
    app.enableCors({ credentials: true, origin: ["http://localhost:5173"] });
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map