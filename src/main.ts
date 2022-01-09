import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setSwagger } from './utils/swagger.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // swagger
  setSwagger(app);

  await app.listen(3000);
}

bootstrap();
