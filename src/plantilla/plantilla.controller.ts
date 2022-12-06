/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Plantilla } from 'src/schemas/plantilla.schema';
import { PlantillaService } from './plantilla.service';

@Controller('plantilla')
export class PlantillaController {
    constructor(private plantillaService: PlantillaService) {}

    @Get()
    getPlantillas() {
      return this.plantillaService.getPlantillas();
    }
    @Get('/:id')
    getPlantilla(@Param('id') id: string) {
      return this.plantillaService.getPlantilla(id);
    }
    @Post()
    createPlantilla(@Body() plantilla: Plantilla){
    return this.plantillaService.createPlantilla(plantilla);
    }
}
