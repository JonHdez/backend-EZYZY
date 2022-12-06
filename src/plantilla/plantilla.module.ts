/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Plantilla, PlantillaSchema } from 'src/schemas/plantilla.schema';
import { PlantillaController } from './plantilla.controller';
import { PlantillaService } from './plantilla.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Plantilla.name,
        schema: PlantillaSchema
      }
    ]),
  ],
  controllers: [PlantillaController],
  providers: [PlantillaService],
})
export class PlantillaModule {}
