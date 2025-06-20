import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('StaffPRO Swagger')
  .setDescription('Documentación de Swagger para StaffPRO')
  .setVersion('1.0')
  .addTag('')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger/api', app, document);
  app.enableCors()
  app.useGlobalPipes(
new ValidationPipe({
whitelist: false, //si es true, solo filtra campos validados
transform: true,
transformOptions: {
enableImplicitConversion: true,
},
}),
);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
