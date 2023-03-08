import { Prisma } from '@prisma/client';
import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { QueryDto } from './dto/query.dto';

@Injectable()
export class PostsService {
  constructor(private prismaService: PrismaService) { }
  // create(createPostDto: CreatePostDto, user_id: string) {
  create(createPostDto: Prisma.PostCreateInput) {
    // const { title, body } = createPostDto
    // return this.prismaService.post.create({
    //   data: {
    //     title,
    //     body,
    //     author: {
    //       connect: {
    //         id: user_id
    //       }
    //     },
    //   }
    // });
    return this.prismaService.post.create({ data: createPostDto })
  }

  findAll(query: Prisma.PostInclude) {
    // return this.prismaService.post.findMany({
    //   include: {
    //     author: {
    //       select: {
    //         email: true
    //       }
    //     },
    //   }
    // });
    return this.prismaService.post.findMany({ include: query })
  }

  findOne(id: string) {
    return this.prismaService.post.findUnique({
      where: {
        id
      }
    });
  }

  update(id: string, updatePostDto: Prisma.PostUpdateInput) {
    const { categories, ...rest } = updatePostDto
    return this.prismaService.post.update({
      where: {
        id
      },
      data: updatePostDto
    });
  }

  remove(id: string) {
    return this.prismaService.post.delete({ where: { id } })
  }
}
