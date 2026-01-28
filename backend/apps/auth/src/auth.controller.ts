import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards()
  @Post('login')
  login(): string {
    return this.authService.login();
  }

  @Get('authHello')
  getHello(): string {
    return this.authService.getHello();
  }
}
