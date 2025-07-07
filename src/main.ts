// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as fs from 'fs';
import * as path from 'path';

async function bootstrap() {
  const filePathOfCert = path.resolve(__dirname, '../src/certs/cert.pem');
  const filePathOfKey = path.resolve(__dirname, '../src/certs/key.pem');
  const httpsOptions = {
    key: fs.readFileSync(filePathOfKey),
    cert: fs.readFileSync(filePathOfCert),
  };
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { httpsOptions });
  await app.listen(3030);
}
bootstrap();
