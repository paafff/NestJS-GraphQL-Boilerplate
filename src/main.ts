import * as dotenv from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { InitializationService } from './services/initialization/initialization.service';
// import { ConfigService } from '@nestjs/config';

// dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const environment = process.env.NODE_ENV;
  const port = process.env.APP_PORT;

  app.enableCors({
    origin: '*', // You can specify the allowed origins here (e.g., 'http://example.com')
    methods: 'GET,PUT,PATCH,POST,DELETE',
    allowedHeaders:
      'Origin, X-Requested-With, Content-Type, Accept, Content-Disposition', // Add Content-Disposition
    credentials: true, // If using cookies or authorization headers
  });

  const initializationService = app.get(InitializationService);
  try {
    await initializationService.initialize();
  } catch (error) {
    console.error('Initialization failed:', error);
  }

  await app.listen(port || 3000);
  console.log(`backend is running in ${environment} mode on port ${port}`);
}
bootstrap();
