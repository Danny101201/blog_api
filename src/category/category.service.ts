import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class CategoryService {
  constructor(
    private PrismaService: PrismaService
  ) { }
  create(createCategoryDto: CreateCategoryDto) {
    return this.PrismaService.category.create({ data: createCategoryDto })
  }

  findAll(query: Prisma.CategoryInclude) {
    return this.PrismaService.category.findMany({ include: query });
  }

  findOne(id: string) {
    return this.PrismaService.category.findUnique({ where: { id } });
  }

  update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return this.PrismaService.category.update({ where: { id }, data: updateCategoryDto })
  }

  remove(id: string) {
    return this.PrismaService.category.delete({ where: { id } });
  }
}
