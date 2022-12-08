/* eslint-disable prettier/prettier */
import { HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Admin, AdminDocument } from 'src/schemas/admin.schema';
import { Cliente, ClienteDocument } from 'src/schemas/cliente.schema';
import { ClienteService } from '../cliente/cliente.service';
import { JwtStrategy } from './jwt.strategy';
import jwt_decode from 'jwt-decode';
import { Token } from 'src/schemas/token.schema';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Cliente.name) private clienteModel: Model<ClienteDocument>,
    @InjectModel(Admin.name) private adminModel: Model<AdminDocument>,
    private jwtAuthService: JwtService,
    private jwtStrategy: JwtStrategy,
  ) {}

  checkPassword(pass: string, passBD: string): boolean {
    let chek: boolean;
    if (pass === passBD) {
      chek = true;
    } else {
      chek = false;
    }
    return chek;
  }

  async registerCliente(cliente: Cliente) {
    return this.clienteModel.create(cliente);
  }

  async registerAdmin(admin: Admin) {
    return this.adminModel.create(admin);
  }

  async loginCliente(cliente: Cliente) {
    const { correo, pasword } = cliente;
    const findCliente = await this.clienteModel.findOne({ correo });
    if (!findCliente) throw new HttpException('USER_NOT_FOUND', 404);

    const checkPass = this.checkPassword(pasword, findCliente.pasword);
    if (!checkPass) throw new HttpException('PASSWORD_INCORRECT', 403);
    const payload = { id: findCliente._id, nombre: findCliente.nombre, apellido: findCliente.Apellido, correo: findCliente.correo, status:findCliente.status, fotoUrl: findCliente.fotoUrl };
    const token = this.jwtAuthService.sign(payload);
    this.decodeToken(token);
    const data = {
      user: findCliente,
      token,
    };

    return data;
  }
  async loginAdmin(admin: Admin) {
    const { correo, pasword } = admin;
    const findAdmin = await this.adminModel.findOne({ correo });
    if (!findAdmin) throw new HttpException('USER_NOT_FOUND', 404);

    const checkPass = this.checkPassword(pasword, findAdmin.pasword);
    if (!checkPass) throw new HttpException('PASSWORD_INCORRECT', 403);
    const payload = { id: findAdmin._id, nombre: findAdmin.nombre};
    const token = this.jwtAuthService.sign(payload);

    const data = {
      user: findAdmin,
      token,
    };

    return data;
  }

  async decodeToken(token: string) {
    const decoded = this.jwtAuthService.decode(token);
    console.log(decoded);
    return decoded;
  }
}
