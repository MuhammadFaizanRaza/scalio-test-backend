import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './common/filters/all-exception-filters';
import { TransformInterceptor } from './common/interceptor/transform.interceptor';
import {
  EnvConfigInterface,
  ENV_CONFIG,
} from './core/environment/environment.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const envConfig = app.get(ConfigService).get<EnvConfigInterface>(ENV_CONFIG);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  app.useGlobalInterceptors(new TransformInterceptor());

  // catch all exception and return custom respone

  app.useGlobalFilters(new AllExceptionsFilter(envConfig.nodeEnv));

  await app.listen(envConfig.port);
}
bootstrap();
