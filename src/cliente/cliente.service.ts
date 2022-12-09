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
      console.log(result)
      return result;
    }
    async getCliente(id: string):Promise<Cliente> {
      const result = await this.clienteModel.findById(id).exec();
      console.log(result)
      return result;
    }
    async createCliente(cliente: Cliente): Promise<Cliente> {
      const newCliente = new this.clienteModel(cliente);
      return await newCliente.save();
    }
    async updateCliente(id: string, cliente: Cliente): Promise<Cliente> {
      return await this.clienteModel.findByIdAndUpdate(id, cliente, { new: true });
    }
}
