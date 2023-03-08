import { Request } from 'express'
import { AuthService } from './auth.service';
import { Body, Controller, Get, Post, Req, UseGuards, UseInterceptors } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LocalAuthGuard } from './guards/local.guard';
import { JWTAuthGuard } from './guards/jwt.guard';
import { User } from '@prisma/client';
import { LoggingInterceptor } from './interceptor';
import { MeGuard } from './guards/me.guard';
import { ReqUser } from './decorator/user.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  // @Get('me')
  // // @UseGuards(MeGuard)
  // me(@Req() req: Request) {
  //   return req.user
  // }
  // @UseInterceptors(LoggingInterceptor)
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Req() req: Request) {
    return this.authService.sign(req.user as User)
  }
  @UseGuards(JWTAuthGuard)
  @Get('profile')
  profile(@ReqUser() user) {
    return user
  }

  @Post('register')
  register(@Body() createUserDto: CreateUserDto) {

    return this.authService.registeruser(createUserDto)
  }
}
