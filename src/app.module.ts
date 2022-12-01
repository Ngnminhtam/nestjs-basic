import { UsersModule } from './users/user.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [UsersModule],
})
export class AppModule {}
