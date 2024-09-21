import { Module } from '@nestjs/common';
import { FavorisService } from './favoris.service';
import { FavorisController } from './favoris.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/USER/entities/user.entity';
import { Event } from 'src/event/entities/event.entity';
import { Favoris } from './entities/favoris.entity';

@Module({
  imports:[TypeOrmModule.forFeature([
    Favoris,
    Event,
    User
  ])],
  controllers: [FavorisController],
  providers: [FavorisService],
})
export class FavorisModule {}
