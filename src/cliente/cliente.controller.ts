/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { Body, Param, Post } from '@nestjs/common/decorators';
import { Cliente } from 'src/schemas/cliente.schema';
import { ClienteService } from './cliente.service';

@Controller('cliente')
export class ClienteController {
    constructor(private clienteService: ClienteService) {}

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
