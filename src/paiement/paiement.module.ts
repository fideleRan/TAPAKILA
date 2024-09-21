import { Module } from '@nestjs/common';
import { PaiementService } from './paiement.service';
import { PaiementController } from './paiement.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paiement } from './entities/paiement.entity';
import { BonCommande } from 'src/bon_commande/entities/bon_commande.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([
      Paiement,
      BonCommande
    ])
  ],
  controllers: [PaiementController],
  providers: [PaiementService],
})
export class PaiementModule {}
