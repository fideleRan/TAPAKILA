import { Module } from '@nestjs/common';
import { OrganisateurService } from './organisateur.service';
import { OrganisateurController } from './organisateur.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organisateur } from './entities/organisateur.entity';

@Module({
  imports:[TypeOrmModule.forFeature([
    Organisateur
  ])],
  controllers: [OrganisateurController],
  providers: [OrganisateurService],
})
export class OrganisateurModule {}
