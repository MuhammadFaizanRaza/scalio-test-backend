import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './core/core.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [CoreModule, PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
