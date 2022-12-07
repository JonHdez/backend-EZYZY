/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cliente, ClienteDocument } from 'src/schemas/cliente.schema';
@Injectable()
export class AuthService {
    constructor(@InjectModel(Cliente.name) private clienteModel: Model<ClienteDocument>) {}

    async register(cliente:Cliente) {
        return this.clienteModel.create(cliente)
    }
}
