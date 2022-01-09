import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DemoModule } from './modules/demo/demo.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [DemoModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
