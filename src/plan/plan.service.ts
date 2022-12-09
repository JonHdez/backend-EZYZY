/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Plan, PlanDocument } from 'src/schemas/plan.schema';

@Injectable()
export class PlanService {

    constructor(@InjectModel(Plan.name) private planModel: Model<PlanDocument>) {}

    async getPlans():Promise<Plan[]> {
      const result = await this.planModel.find().exec();
      console.log(result)
      return result;
    }
    async getPlan(id: string):Promise<Plan> {
      const result = await this.planModel.findById(id).exec();
      console.log(result)
      return result;
    }
    async createPlan(plan: Plan): Promise<Plan> {
      const newPlan = new this.planModel(plan);
      return await newPlan.save();
    }
    async deletePlan(id: string): Promise<Plan> {
      return await this.planModel.findByIdAndRemove(id);

    }
  }