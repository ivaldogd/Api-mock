import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AgendaModule } from './agenda/agenda.module';

@Module({
  imports: [AuthModule, AgendaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
