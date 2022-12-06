/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cliente, ClienteDocument } from 'src/schemas/cliente.schema';

@Injectable()
export class ClienteService {
    constructor(@InjectModel(Cliente.name) private clienteModel: Model<ClienteDocument>) {}

    async getClientes():Promise<Cliente[]> {
      const result = await this.clienteModel.find().exec();
      return result;
    }


}
