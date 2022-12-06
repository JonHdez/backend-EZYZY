import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteController } from './cliente/cliente.controller';
import { ClientesService } from './cliente/cliente.service';
import { ClientesModule } from './cliente/cliente.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://mongo:U3iQHgr4LvMb3c4hdI4Z@containers-us-west-99.railway.app:6809',
    ),
    ClientesModule,
  ],
  controllers: [AppController, ClienteController],
  providers: [AppService, ClientesService],
})
export class AppModule {}
