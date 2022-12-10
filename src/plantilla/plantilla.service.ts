/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Plantilla, PlantillaDocument } from 'src/schemas/plantilla.schema';

@Injectable()
export class PlantillaService {

    constructor(@InjectModel(Plantilla.name) private plantillaModel: Model<PlantillaDocument>) {}

    async getPlantillas():Promise<Plantilla[]> {
      const result = await this.plantillaModel.find().exec();
      console.log(result)
      return result;
    }
    async getPlantilla(id: string):Promise<Plantilla> {
      const result = await this.plantillaModel.findById(id).exec();
      console.log(result)
      return result;
    }
    async createPlantilla(plantilla: Plantilla): Promise<Plantilla> {
      const newPlantilla = new this.plantillaModel(plantilla);
      return await newPlantilla.save();
    }

    async updateCliente(id: string, plantilla: Plantilla): Promise<Plantilla> {
      return await this.plantillaModel.findByIdAndUpdate(id, plantilla, { new: true });
    }

}
