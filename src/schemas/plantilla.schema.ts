/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument} from 'mongoose';


export type PlantillaDocument = HydratedDocument<Plantilla>;

@Schema() 
export class Plantilla {
  @Prop()
  _id: string;

  @Prop()
  tituloDePlantilla: string;

  @Prop()
  descripcionPlantilla: string;

  @Prop()
  codigohtml: string;

}

export const PlantillaSchema = SchemaFactory.createForClass(Plantilla);