import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async generateToken(body): Promise<{ access_token: string }> {
    const { user, password } = body;
    try {
      if (user !== 'api-user' || password !== '123') {
      throw new UnauthorizedException('Usuário ou senha inválidos');
    }

    const payload = { user: 'api-user' }; // pode parametrizar

    return {
      access_token: this.jwtService.sign(payload),
    };
    } catch (error) {
      throw error;
    }
    
  }

  async validateToken(Token: string): Promise<{valid: boolean; decoded?: any }> {


    if (!Token) {
      throw new UnauthorizedException('Token não informado');
    }

    try {
      const decoded = this.jwtService.verify(Token);
      return {
        valid: true,
        decoded, // opcional, pode remover se não quiser mostrar payload
      };
    } catch (error) {
      throw new UnauthorizedException('Token inválido ou expirado');
    }
  }
}
