/* eslint-disable prettier/prettier */
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { Cliente } from '../schemas/cliente.schema';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'Esto_es_Secreto_xd',
    });
  }
/*   async validate(payload: any): Promise<Cliente> {
    return { Id: payload._id, nombre: payload.nombre };
  } */
}