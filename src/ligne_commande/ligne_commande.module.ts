import { Module } from '@nestjs/common';
import { LigneCommandeService } from './ligne_commande.service';
import { LigneCommandeController } from './ligne_commande.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BonCommande } from 'src/bon_commande/entities/bon_commande.entity';
import { TypeBillet } from 'src/type-billet/entities/type-billet.entity';
import { LigneCommande } from './entities/ligne_commande.entity';

@Module({
  imports:[TypeOrmModule.forFeature([
    TypeBillet,
    BonCommande,
    LigneCommande
  ])],
  controllers: [LigneCommandeController],
  providers: [LigneCommandeService],
})
export class LigneCommandeModule {}
