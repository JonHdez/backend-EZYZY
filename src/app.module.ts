import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './cliente/cliente.module';
import { AdminModule } from './admin/admin.module';
import { EmpresaModule } from './empresa/empresa.module';
import { PlantillaModule } from './plantilla/plantilla.module';
import { PlanModule } from './plan/plan.module';

@Module({
  imports: [
    ClienteModule,
    MongooseModule.forRoot(
      'mongodb://mongo:U3iQHgr4LvMb3c4hdI4Z@containers-us-west-99.railway.app:6809',
    ),
    AdminModule,
    EmpresaModule,
    PlantillaModule,
    PlanModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
