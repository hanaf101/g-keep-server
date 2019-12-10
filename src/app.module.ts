import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { NotesModule } from './notes/notes.module';
import {ConfigService} from './config/config.service';


const configService = new ConfigService(`${process.env.NODE_ENV}.env`);

@Module({
  imports: [MongooseModule.forRoot(configService.get('DB_NAME')),
    NotesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
