import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './USER/user.module';
import { OrganisateurModule } from './organisateur/organisateur.module';
import { EventModule } from './event/event.module';
import { LieuModule } from './lieu/lieu.module';
import { TypeBilletModule } from './type-billet/type-billet.module';
import { LigneCommandeModule } from './ligne_commande/ligne_commande.module';
import { FavorisModule } from './favoris/favoris.module';
import { BonCommandeModule } from './bon_commande/bon_commande.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PaiementModule } from './paiement/paiement.module';
import { CommentaireModule } from './commentaire/commentaire.module';



@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
    JwtModule.register({
      global:true,
      secret:'123',
      signOptions:{
        expiresIn:'1h'
      }
    }),
    ServeStaticModule.forRoot({
      rootPath:join(__dirname,"../public/photo/event"),serveRoot:"/photo"
    }),
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "fidele", 
      password: "Roptader3806",
      database: "tapakila",
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),
    UserModule,
    OrganisateurModule,
    EventModule,
    LieuModule,
    TypeBilletModule,
    LigneCommandeModule,
    FavorisModule,
    BonCommandeModule,
    PaiementModule,
    CommentaireModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
