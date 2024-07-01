import { Module } from '@nestjs/common';
import { FavorisService } from './favoris.service';
import { FavorisController } from './favoris.controller';

@Module({
  controllers: [FavorisController],
  providers: [FavorisService],
})
export class FavorisModule {}
