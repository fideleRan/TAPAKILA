import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { JwtAuthStrategy } from 'src/Utilities/Strategy/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { Organisateur } from 'src/organisateur/entities/organisateur.entity';
import { OrganisateurService } from 'src/organisateur/organisateur.service';

@Module({
  imports:[
    PassportModule.register({
      defaultStrategy:'jwt'
    }),
    JwtModule.register({
      global:true,
      secret:'123',
      signOptions:{
        expiresIn:'1d'
      }
    }),
    TypeOrmModule.forFeature([
      User,
      Organisateur
    ])
  ],
  controllers: [UserController],
  providers: [UserService,JwtAuthStrategy,OrganisateurService],
})
export class UserModule {}
