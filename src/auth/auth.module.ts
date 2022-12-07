/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Cliente, ClienteSchema } from 'src/schemas/cliente.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { Admin, AdminSchema } from 'src/schemas/admin.schema';
import { PassportModule } from '@nestjs/passport';
import { ClienteModule } from 'src/cliente/cliente.module';
import { AdminModule } from 'src/admin/admin.module';

@Module({
  imports: [
    ClienteModule,
    AdminModule,
    PassportModule,
    MongooseModule.forFeature([
      {
        name: Cliente.name,
        schema: ClienteSchema,
      },
      {
        name: Admin.name,
        schema: AdminSchema,
      }
    ]),
    JwtModule.register({
      secret: 'Esto_es_Secreto_xd',
      signOptions: { expiresIn: '5h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
