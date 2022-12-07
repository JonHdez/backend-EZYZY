/* eslint-disable prettier/prettier */
import { HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cliente, ClienteDocument } from 'src/schemas/cliente.schema';
@Injectable()
export class AuthService {
    constructor(@InjectModel(Cliente.name) private clienteModel: Model<ClienteDocument>,
                private jwtAuthService: JwtService) {}

    checkPassword(passCliente: string, passBD: string): boolean {
        let chek:boolean;
        if (passCliente === passBD){
            chek = true
        }else{
            chek = false
        }
        return chek
    }
    
    async register(cliente:Cliente) {
        return this.clienteModel.create(cliente)
    }

    async login(cliente:Cliente) {
        const { correo, pasword } = cliente
        const findUser = await this.clienteModel.findOne({ correo });
        if (!findUser) throw new HttpException('USER_NOT_FOUND', 404);
        
        const checkPass = this.checkPassword(pasword, findUser.pasword);
        if (!checkPass) throw new HttpException('PASSWORD_INCORRECT', 403);
        const payload = {id:findUser._id, nombre:findUser.nombre}
        const token = this.jwtAuthService.sign(payload)

        const data = {
            user: findUser,
            token,
        };

        return data;
    }


}
