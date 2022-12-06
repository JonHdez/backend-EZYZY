/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Empresa, EmpresaDocument } from 'src/schemas/empresa.schema';

@Injectable()
export class EmpresaService {

    constructor(@InjectModel(Empresa.name) private empresaModel: Model<EmpresaDocument>) {}

    async getEmpresas():Promise<Empresa[]> {
      const result = await this.empresaModel.find().exec();
      console.log(result)
      return result;
    }
    async getEmpresa(id: string):Promise<Empresa> {
      const result = await this.empresaModel.findById(id).exec();
      console.log(result)
      return result;
    }
    async createEmpresa(cliente: Empresa): Promise<Empresa> {
      const newEmpresa = new this.empresaModel(cliente);
      return await newEmpresa.save();
    }

}
