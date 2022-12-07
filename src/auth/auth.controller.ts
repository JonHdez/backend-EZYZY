/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { Cliente } from '../schemas/cliente.schema';
import { Body, Post } from '@nestjs/common/decorators';
@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor (private authService: AuthService) {}

    @Post('register')
    registerUser(@Body() cliente:Cliente) {
        return this.authService.register(cliente)
    }
    @Post('login')
    loginUser(@Body() cliente:Cliente) {
        return this.authService.login(cliente)
    }
}
