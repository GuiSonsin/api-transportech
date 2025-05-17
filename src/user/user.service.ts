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
      lastName: user.lastName,
      password: user.password,
      phone: user.phone,
      email: user.email,
      isActive: user.isActive
    }
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = await this.prisma.user.create({
        data: createUserDto
      });
      return this.mapToEntity(user);
  }

  async findAll(): Promise<User[]> {
    const user = await this.prisma.user.findMany();
    return user.map(user => this.mapToEntity(user));
  }

  async findOne(document: string) {
    return await this.prisma.user.findUnique({
      where: { document },
    });
  }

  async update(document: string, updateUserDto: UpdateUserDto) : Promise<User> {
    const user = await this.prisma.user.update({
      where: { document },
      data: updateUserDto
    });
    return this.mapToEntity(user);
  }

  async remove(document: string) { 
    await this.prisma.user.delete({
      where: { document },
    });
    return { message: `Usuário com o CPF ${document} removido com sucesso.` };
  }
}
