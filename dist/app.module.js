"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const user_module_1 = require("./USER/user.module");
const organisateur_module_1 = require("./organisateur/organisateur.module");
const event_module_1 = require("./event/event.module");
const lieu_module_1 = require("./lieu/lieu.module");
const type_billet_module_1 = require("./type-billet/type-billet.module");
const ligne_commande_module_1 = require("./ligne_commande/ligne_commande.module");
const favoris_module_1 = require("./favoris/favoris.module");
const bon_commande_module_1 = require("./bon_commande/bon_commande.module");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            jwt_1.JwtModule.register({
                global: true,
                secret: '123',
                signOptions: {
                    expiresIn: '1h'
                }
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, "../public/photo/event"), serveRoot: "/photo"
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: "mysql",
                host: "localhost",
                port: 3306,
                username: "fidele",
                password: "Roptader3806",
                database: "tapakila",
                entities: ['dist/**/*.entity{.ts,.js}'],
                synchronize: true,
            }),
            user_module_1.UserModule,
            organisateur_module_1.OrganisateurModule,
            event_module_1.EventModule,
            lieu_module_1.LieuModule,
            type_billet_module_1.TypeBilletModule,
            ligne_commande_module_1.LigneCommandeModule,
            favoris_module_1.FavorisModule,
            bon_commande_module_1.BonCommandeModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map