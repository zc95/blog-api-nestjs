import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export function setSwagger(app: any) {
  const options = new DocumentBuilder()
    .setTitle('博客接口文档')
    .setDescription('blog api')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('doc', app, document);
}
