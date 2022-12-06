/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Plan } from 'src/schemas/plan.schema';
import { PlanService } from './plan.service';

@Controller('plan')
export class PlanController {

    constructor(private planService: PlanService) {}

    @Get()
    getPlans() {
      return this.planService.getPlans();
    }
    @Get('/:id')
    getPlan(@Param('id') id: string) {
      return this.planService.getPlan(id);
    }
    @Post()
    createPlan(@Body() plan: Plan){
    return this.planService.createPlan(plan);
    }
}
