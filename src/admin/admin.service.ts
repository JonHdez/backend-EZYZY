/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Admin, AdminDocument } from 'src/schemas/admin.schema';

@Injectable()
export class AdminService {

    constructor(@InjectModel(Admin.name) private AdminModel: Model<AdminDocument>) {}

    async getAdmins():Promise<Admin[]> {
      const result = await this.AdminModel.find().exec();
      console.log(result)
      return result;
    }
    async getAdmin(id: string):Promise<Admin> {
      const result = await this.AdminModel.findById(id).exec();
      console.log(result)
      return result;
    }
    async createAdmin(admin: Admin): Promise<Admin> {
      const newAdmin = new this.AdminModel(admin);
      return await newAdmin.save();
    }
}
