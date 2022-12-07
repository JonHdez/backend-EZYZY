/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument} from 'mongoose';


export type ClienteDocument = HydratedDocument<Cliente>;

@Schema() 
export class Cliente {
  @Prop()
  nombre: string;

  @Prop()
  Apellido: string;

  @Prop()
  correo: string;

  @Prop()
  pasword: string;

  @Prop()
  fotoUrl: string;

  @Prop()
  status: string;
}

export const ClienteSchema = SchemaFactory.createForClass(Cliente);
