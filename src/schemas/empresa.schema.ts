/* eslint-disable prettier/prettier */
  // eslint-disable-next-line @typescript-eslint/ban-types
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument} from 'mongoose';


export type EmpresaDocument = HydratedDocument<Empresa>;

@Schema() 
export class Empresa {
  @Prop()
  nombre: string;

  @Prop()
  apellido: string;

  @Prop()
  correo: string;

  @Prop()
  password: string;

  @Prop([Object])
  productos: productos[];

  @Prop([Object])
  empresa: empresa[];

}

export interface empresa {
            NombreEmpresa:string;
            logoEmpresa:string; 
            descripcionEmpresa:string ; 
            correoEmpresa:string; 
            direccionEmpresa:string; 
            numeroTelefonicoEmpresa:number; 
            status: true; 
            plan: string;
            mision:string;
            vision:string;
            productos:string[];
}

export interface productos {
  nombre: string;
  cantidad: number;
  precio: number;
  descripcion: string
}

export const EmpresaSchema = SchemaFactory.createForClass(Empresa);