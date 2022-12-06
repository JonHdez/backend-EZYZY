/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument} from 'mongoose';


export type PlanDocument = HydratedDocument<Plan>;

@Schema() 
export class Plan {
  @Prop()
  tituloDePlan: string;

  @Prop()
  precioPlan: string;

  @Prop([String])
  caracteristicas: string[];

}

export const PlanSchema = SchemaFactory.createForClass(Plan);