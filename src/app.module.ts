import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DemoModule } from './modules/demo/demo.module';
import { ArticleModule } from './modules/article/article.module';

@Module({
  imports: [DemoModule, ArticleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
