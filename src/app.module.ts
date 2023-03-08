import { BeforeApplicationShutdown, Module, OnApplicationBootstrap, OnApplicationShutdown, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { CategoryModule } from './category/category.module';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, UsersModule, CategoryModule, PostsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})


export class AppModule implements
  OnModuleInit,
  OnApplicationBootstrap,
  OnModuleDestroy,
  BeforeApplicationShutdown,
  OnApplicationShutdown {
  onApplicationBootstrap() {
    console.log('[AppModule]: bootstrap event!');
  }
  onModuleInit(): void {
    console.log('[AppModule]: initial event!');
  }
  onModuleDestroy(): void {
    console.log('[AppModule]: destroy event!');
  }
  beforeApplicationShutdown(): void {
    console.log('[AppModule]: before shutdown event!');
  }
  onApplicationShutdown(): void {
    console.log('[AppModule]: shutdown event!');
  }
}
