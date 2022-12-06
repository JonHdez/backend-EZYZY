/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument} from 'mongoose';


export type PlantillaDocument = HydratedDocument<Plantilla>;

@Schema() 
export class Plantilla {
  @Prop()
  tituloDePlantilla: string;

  @Prop()
  descripcionPlantilla: string;

  @Prop()
  codigohtml: string;

  @Prop()
  css: string;

}

export const PlantillaSchema = SchemaFactory.createForClass(Plantilla);