import { Injectable } from '@nestjs/common';

@Injectable()
export class AgendaService {
  async findAll(page = 1, limit = 10): Promise<{ items: any[]; total: number; page: number; limit: number, totalPages: number }> {
    // Mock de 20 registros
    const mockData = Array.from({ length: 100 }, (_, i) => ({
      PAR_CD_ATENDIMENTO: 1000 + i,
      PAR_CD_PACIENTE: 2000 + i,
      PAR_SN_PENDENTE: i % 2 === 0 ? 'S' : 'N',
      DATA_DO_AGENDAMENTO: `2025-09-${(i % 30) + 1} 08:00:00`,
      DTHR_ATENDIMENTO: `2025-09-${(i % 30) + 1} 09:00:00`,
      NOME_DO_PACIENTE: `Paciente ${i + 1}`,
      DATA_DE_NASCIMENTO: `198${i % 10}-0${(i % 9) + 1}-15`,
      ATENDIMENTO: 5000 + i,
      EXAME: `Exame ${i + 1}`,
      STATUS_RECEPCAO: i % 3 === 0 ? '#008000' : '#87CEEB',
      STATUS_ENFERMAGEM: i % 2 === 0 ? '#008000' : '#FF0000',
      STATUS_DO_INJETAVEL: i % 2 === 0 ? '#008000' : '#FF0000',
      STATUS_EXAME: i % 2 === 0 ? '#008000' : '#FF0000',
      PAR_CD_SENHA: `SENHA${i + 1}`,
      PAR_CD_SETOR: (i % 5) + 1,
      TP_ATENDIMENTO: i % 2 === 0 ? 'AMBULATORIAL' : 'URGÊNCIA/EMERGÊNCIA',
    }));

    // Total de registros
    const total = mockData.length;

    const totalPages = Math.ceil(total / limit);

    // Índices de corte
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    // Fatia os dados
    const paginatedData = mockData.slice(startIndex, endIndex);

    return {
      items: paginatedData,
      total,
      page,
      limit,
      totalPages
    };
  }
}

