import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity'; 
import { PrismaService } from 'prisma/prisma.service'; 

@Injectable()
export class UserService {

  constructor(private prisma: PrismaService){}

  private mapToEntity(user: any) : User{
    return {
      document: user.document,
      name: user.name,
      lastName: user.last,
      password: user.password,
      phone: user.phone,
      email: user.email,
      isActive: user.isActive
    }
  }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  async findAll(): Promise<User[]> {
    const user = await this.prisma.user.findMany();
    return user.map(user => this.mapToEntity(user));
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
