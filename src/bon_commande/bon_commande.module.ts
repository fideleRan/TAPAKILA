import { Module } from '@nestjs/common';
import { BonCommandeService } from './bon_commande.service';
import { BonCommandeController } from './bon_commande.controller';
import { BonCommande } from './entities/bon_commande.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/USER/entities/user.entity';
import { Event } from 'src/event/entities/event.entity';

@Module({
  imports:[TypeOrmModule.forFeature([
    BonCommande,
    Event,
    User
  ])],
  controllers: [BonCommandeController],
  providers: [BonCommandeService],
})
export class BonCommandeModule {}
