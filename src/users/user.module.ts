import { UserService } from './user.service';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UsersMockService } from './user-mock.serviec';

@Module({
  controllers: [UserController],
  providers: [
    {
      provide: UserService,
      useClass: UsersMockService,
    },
  ],
})
export class UsersModule {}
