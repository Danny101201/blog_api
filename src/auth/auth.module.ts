import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { UsersService } from 'src/users/users.service';
import { LocalStragey } from './strategy/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './strategy/jwt.stragy';
JwtModule
@Module({
  imports: [PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
    }),],
  providers: [AuthService, LocalStragey, JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule { }
