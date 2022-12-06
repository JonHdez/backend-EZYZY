/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument} from 'mongoose';


export type ClienteDocument = HydratedDocument<Cliente>;

@Schema() 
export class Cliente {
  @Prop()
  _id: string;

  @Prop()
  nombre: string;

  @Prop()
  apellido: string;

  @Prop()
  correo: string;

  @Prop()
  password: string;

  @Prop()
  fotoUrl: string;
}

export const ClienteSchema = SchemaFactory.createForClass(Cliente);
