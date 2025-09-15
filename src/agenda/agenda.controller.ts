import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { AgendaService } from './agenda.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('agenda')
export class AgendaController {
  constructor(private readonly agendaService: AgendaService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getAgenda(@Query('page') page = 1, @Query('limit') limit = 10) {
    return this.agendaService.findAll(Number(page), Number(limit));
  }
}
