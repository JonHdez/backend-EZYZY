/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Admin } from 'src/schemas/admin.schema';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
    constructor(private adminService: AdminService) {}
    /* @UseGuards(JwtAuthGuard) */
    @Get()
    getAdmins() {
      return this.adminService.getAdmins();
    }
    /* @UseGuards(JwtAuthGuard) */
    @Get('/:id')
    getAdmin(@Param('id') id: string) {
      return this.adminService.getAdmin(id);
    }
    /* @UseGuards(JwtAuthGuard) */
    @Post()
    createAdmin(@Body() admin: Admin){
    return this.adminService.createAdmin(admin);
    }
}
