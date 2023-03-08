import { UsersService } from './../users/users.service';
import { CreateUserDto } from './../users/dto/create-user.dto';
import { Injectable } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  //get module ref

  constructor(
    private userService: UsersService,
    private JWTService: JwtService,
  ) {
    //strict代表如果auth.module.ts中的provider沒有UsersService會報錯，但UsersService已經被exports了
    // this.userService = this.moduleref.get(UsersService, { strict: false })
  }
  async validateUser(email: string, password: string) {
    const user = await this.userService.findOneByEmail(email)
    if (user.password !== password) return false
    return user
  }
  sign(user: User) {

    const accessToken = this.JWTService.sign({ sub: user.id, email: user.email })
    return {
      accessToken
    }
  }
  async registeruser(createUserDto: CreateUserDto) {
    const newUser = await this.userService.create(createUserDto)
    return this.sign(newUser)
  }
}
