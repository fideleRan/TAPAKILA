import { Module } from '@nestjs/common';
import { TypeBilletService } from './type-billet.service';
import { TypeBilletController } from './type-billet.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeBillet } from './entities/type-billet.entity';
import { Event } from 'src/event/entities/event.entity';

@Module({
  imports:[TypeOrmModule.forFeature([
    TypeBillet,
    Event
  ])],
  controllers: [TypeBilletController],
  providers: [TypeBilletService],
})
export class TypeBilletModule {}
