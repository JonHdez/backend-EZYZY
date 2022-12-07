/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { Plan } from 'src/schemas/plan.schema';
import { PlanService } from './plan.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('plan')
export class PlanController {

    constructor(private planService: PlanService) {}
/*     @UseGuards(JwtAuthGuard) */
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
