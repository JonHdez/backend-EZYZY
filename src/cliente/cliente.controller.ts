/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { Body, Param, Post, UseGuards} from '@nestjs/common/decorators';
import { Cliente } from 'src/schemas/cliente.schema';
import { ClienteService } from './cliente.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
/* import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth() */
@Controller('cliente')
export class ClienteController {
    constructor(private clienteService: ClienteService) {}
    /* @UseGuards(JwtAuthGuard) */
    @Get()
    getClientes() {
      return this.clienteService.getClientes();
    }
    @Get('/:id')
    getCliente(@Param('id') id: string) {
      return this.clienteService.getCliente(id);
    }
    @Post()
    createCliete(@Body() cliente: Cliente){
    return this.clienteService.createCliente(cliente);
    }
}
