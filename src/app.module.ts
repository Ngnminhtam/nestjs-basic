import { UsersModule } from './users/user.module';
import { Module } from '@nestjs/common';
import { UserService } from './users/user.service';

@Module({
  imports: [UsersModule],
  providers: [
    {
      provide: 'APP_USER',
      useClass: UserService,
    },
  ],
})
export class AppModule {}
