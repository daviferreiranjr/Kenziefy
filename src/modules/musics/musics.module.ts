import { Module } from '@nestjs/common';
import { MusicsController } from './musics.controller';
import { MusicsService } from './musics.service';
import { MusicsRepository } from './repositories/musics.repository';
import { MusicsInMemoryRepository } from './in-memory/musics.in-memory.repository';

@Module({
  controllers: [MusicsController],
  providers: [
    MusicsService,
    {
      provide: MusicsRepository,
      useClass: MusicsInMemoryRepository,
    },
  ],
})
export class MusicsModule {}
