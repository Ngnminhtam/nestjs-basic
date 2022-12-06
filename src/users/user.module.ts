import { UserService } from './user.service';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  providers: [
    {
      provide: 'USER_SERVICE_TAM',
      useClass: UserService,
    },
  ],
})
export class UsersModule {}
