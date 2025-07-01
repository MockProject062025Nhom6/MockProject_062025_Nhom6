import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { IUser } from '../users/users.interface';
import { Response } from 'express';
import { RegisterUserDto } from '../users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService
  ) { }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByUsername(username);
    if (user) {
      const isValid = this.usersService.isValidPassword(pass, user.password);
      if (isValid === true) {
        const { userName, fullName, avatarUrl, email, phoneNumber } = user;
        return user
      }
    }
    return null;
  }

  createdRefreshToken = (payload) => {
    const refresh_token = this.jwtService.sign(payload, {
      secret: this.configService.get<string>('JWT_REFRESH_SECRET_KEY'),
      expiresIn: this.configService.get<string>('JWT_REFRESH_EXPIRATION_TIME')
    })
    return refresh_token
  }

  async login(user: IUser, response: Response) {

    const { userName, fullName, avatarUrl, email, phoneNumber } = user;
    const payload = {
      userName,
      fullName,
      avatarUrl,
      email,
      phoneNumber
    }

    const refresh_token = this.createdRefreshToken(payload);

    await this.usersService.updateUserToken(refresh_token, userName);

    response.cookie('token', refresh_token, {
      httpOnly: true,
      maxAge: this.configService.get<number>('JWT_REFRESH_EXPIRE'),
    })
    return {
      access_token: this.jwtService.sign(payload),
      user: {
        userName,
        fullName,
        avatarUrl,
        email,
        phoneNumber
      },
      refresh_token: refresh_token
    };
  }

  async register(user: RegisterUserDto) {
    let userRegister = await this.usersService.register(user);
    return {
      userName: userRegister?.userName,
      createdAt: userRegister?.createdAt,
    }
  }
}
