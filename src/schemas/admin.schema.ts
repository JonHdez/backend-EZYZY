/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument} from 'mongoose';


export type AdminDocument = HydratedDocument<Admin>;

@Schema() 
export class Admin {
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

  @Prop()
  status: string;
}

export const AdminSchema = SchemaFactory.createForClass(Admin);
