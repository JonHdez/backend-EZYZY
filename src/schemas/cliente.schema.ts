/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, ObjectId } from 'mongoose';


export type ClienteDocument = HydratedDocument<Cliente>;

@Schema() 
export class Cliente {
  @Prop()
  _id: ObjectId;

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