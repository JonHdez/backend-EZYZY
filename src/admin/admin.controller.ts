/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Admin } from 'src/schemas/admin.schema';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
    constructor(private adminService: AdminService) {}

    @Get()
    getAdmins() {
      return this.adminService.getAdmins();
    }
    @Get('/:id')
    getAdmin(@Param('id') id: string) {
      return this.adminService.getAdmin(id);
    }
    @Post()
    createAdmin(@Body() admin: Admin){
    return this.adminService.createAdmin(admin);
    }
}
