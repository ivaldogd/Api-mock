import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('token')
  async getToken(@Body() body: any) {
    return this.authService.generateToken(body);
  }

  @Get('validate')
  validateToken(@Body('token') token: string) {
    return this.authService.validateToken(token);
  }
}
