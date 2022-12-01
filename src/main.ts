import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';

async function bootstap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  const PORT = 3333;
  await app.listen(PORT, () => {
    console.log(`app start with port ${PORT}`);
  });
}

bootstap();
