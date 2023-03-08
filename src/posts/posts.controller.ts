import { Prisma } from '@prisma/client';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { ReqUser } from 'src/auth/decorator/user.decorator';
import { JWTAuthGuard } from 'src/auth/guards/jwt.guard';
import { QueryDto } from './dto/query.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) { }

  @UseGuards(JWTAuthGuard)
  @Post()
  create(@ReqUser('userId') user_id, @Body() createPostDto: CreatePostDto) {
    const categorys = createPostDto.categories?.map(c => ({ id: c }))
    return this.postsService.create(
      {
        ...createPostDto,
        author: { connect: { id: user_id } },
        categories: { connect: categorys }
      });
  }

  @Get()
  findAll(@Query() query: QueryDto) {
    return this.postsService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: CreatePostDto) {
    const categorys = updatePostDto.categories?.map(c => ({ id: c }))
    return this.postsService.update(id, { ...updatePostDto, categories: { connect: categorys } });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postsService.remove(id);
  }
}
