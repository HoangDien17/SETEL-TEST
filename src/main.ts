import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

const logger = new Logger('Main');
// const microserviceOptions = {
//   transport: Transport.TCP,
//   options: {
//     host: 'localhost',
//     port: 3000,
//   },
// };
async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        host: 'localhost',
        port: 3000,
      },
    },
  );
  app.listen();
}

bootstrap();
