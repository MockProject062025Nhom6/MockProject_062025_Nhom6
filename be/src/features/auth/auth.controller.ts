import { Body, Controller, Post, Request, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public, ResponseMessage } from 'src/decorator/customize';
import { LocalAuthGuard } from './guard/local-auth.guard';
import { Request as REQ, Response } from 'express';
import { RegisterUserDto } from '../users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('login')
  @ResponseMessage('Đăng nhập thành công')
  @Public()
  @UseGuards(LocalAuthGuard)
  async handleLogin(
    @Request() req: Request & { user },
    @Res({ passthrough: true }) response: Response
  ) {
    return this.authService.login(req.user, response)
  }

  @Public()
  @ResponseMessage('Đăng ký thành công')
  @Post('/register')
  async handleRegister(@Body() registerUserDto: RegisterUserDto) {
    return this.authService.register(registerUserDto)
  }
}
