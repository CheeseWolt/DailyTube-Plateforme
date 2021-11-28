import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VideoModule } from './video/video.module';
import { UserModule } from './user/user.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [VideoModule, UserModule, CommentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
