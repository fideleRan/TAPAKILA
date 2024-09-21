import { Module } from '@nestjs/common';
import { CommentaireService } from './commentaire.service';
import { CommentaireController } from './commentaire.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Commentaire } from './entities/commentaire.entity';
import { Event } from 'src/event/entities/event.entity';
import { User } from 'src/USER/entities/user.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([
      Commentaire,
      Event,
      User
    ])
  ],
  controllers: [CommentaireController],
  providers: [CommentaireService],
})
export class CommentaireModule {}
