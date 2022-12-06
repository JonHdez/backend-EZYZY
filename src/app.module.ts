import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './cliente/cliente.module';

@Module({
  imports: [
    ClienteModule,
    MongooseModule.forRoot(
      'mongodb://mongo:U3iQHgr4LvMb3c4hdI4Z@containers-us-west-99.railway.app:6809',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
