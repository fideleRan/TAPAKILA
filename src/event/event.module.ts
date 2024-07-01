import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from './entities/event.entity';
import { Organisateur } from 'src/organisateur/entities/organisateur.entity';
import { Lieu } from 'src/lieu/entities/lieu.entity';

@Module({
  imports:[TypeOrmModule.forFeature([
    Event,
    Organisateur,
    Lieu
  ])],
  controllers: [EventController],
  providers: [EventService],
})
export class EventModule {}
