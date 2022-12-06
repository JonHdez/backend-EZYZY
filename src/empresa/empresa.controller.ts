/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Empresa } from 'src/schemas/empresa.schema';
import { EmpresaService } from './empresa.service';

@Controller('empresa')
export class EmpresaController {

    constructor(private empresaService: EmpresaService) {}

    @Get()
    getEmpresas() {
      return this.empresaService.getEmpresas();
    }
    @Get('/:id')
    getEmpresa(@Param('id') id: string) {
      return this.empresaService.getEmpresa(id);
    }
    @Post()
    createEmpresa(@Body() empresa: Empresa){
    return this.empresaService.createEmpresa(empresa);
    }
}
