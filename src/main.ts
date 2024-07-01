import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as session from 'express-session'
import * as passport from 'passport'
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Swagger Config
  const options = new DocumentBuilder()
  .setTitle('TAPAKLA')
  .setDescription('TAPAKILA est un plateforme qui a préparer une evennement et de vendre les billet en ligne')
  .setVersion('1.0')
  .addServer('http://localhost:3000/', 'Local environnement')
  .addTag('API-Gestion de Ticket')
  .addBearerAuth()
  .build()
  const document = SwaggerModule.createDocument(app,options)
  SwaggerModule.setup('api-swagger-Tapakila',app,document)
  
  app.use(cookieParser())
  app.useGlobalPipes(new ValidationPipe({transform:true}))
  app.enableCors({credentials:true, origin:["http://localhost:5173"]})


  await app.listen(3000);
}
bootstrap();
