import { Module } from '@nestjs/common';
import { LieuService } from './lieu.service';
import { LieuController } from './lieu.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lieu } from './entities/lieu.entity';

@Module({
  imports:[TypeOrmModule.forFeature([
    Lieu
  ])],
  controllers: [LieuController],
  providers: [LieuService],
})
export class LieuModule {}
