import { CreateMusicDto } from '../dtos/create-music.dto';
import { Music } from '../entities/music.entitie';

export abstract class MusicsRepository {
  abstract create(data: CreateMusicDto): Promise<Music>;
  abstract findAll(): Promise<any>;
  abstract findOne(id: string): Promise<Music>;
}
