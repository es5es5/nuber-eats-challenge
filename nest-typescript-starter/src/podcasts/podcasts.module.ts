import { Module } from '@nestjs/common';
import { PodcastsService } from './podcasts.service';
import { PodcastsController } from './podcasts.controller';
import { Podcast } from './entities/podcast.entity';

@Module({
  imports: [Podcast],
  controllers: [PodcastsController],
  providers: [PodcastsService],
})
export class PodcastsModule {}
