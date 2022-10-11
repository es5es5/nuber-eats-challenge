import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePodcastDto } from './dto/create-podcast.dto';
import { UpdatePodcastDto } from './dto/update-podcast.dto';
import { Podcast } from './entities/podcast.entity';

@Injectable()
export class PodcastsService {
  private podcasts: Podcast[] = [];

  create(createPodcastDto: CreatePodcastDto) {
    console.info(createPodcastDto)
    return this.podcasts.push({
      id: this.podcasts.length + 1,
      ...createPodcastDto,
    });
  }

  findAll() {
    return this.podcasts;
  }

  findOne(id: number) {
    const podcast = this.podcasts.find((podcast) => podcast.id === +id);
    if (!podcast) {
      throw new NotFoundException(`Podcast with Id ${id} not found.`);
    }
    return podcast;
  }

  update(id: number, updatePodcastDto: UpdatePodcastDto) {
    const podcast = this.findOne(id);
    this.remove(id);
    this.podcasts.push({
      ...podcast,
      ...updatePodcastDto,
    });
  }

  remove(id: number) {
    this.findOne(id);
    this.podcasts = this.podcasts.filter((podcast) => podcast.id !== +id);
    return true;
  }
}
