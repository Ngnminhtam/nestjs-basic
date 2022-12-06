import { UserService } from './user.service';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UsersMockService } from './user-mock.serviec';
import { StoreConfig } from 'src/store/store.config';

@Module({
  controllers: [UserController],

  providers: [UserService],

  // Custom Provider useClass

  // providers: [
  //   {
  //     provide: UserService,
  //     useClass: UsersMockService,
  //   },
  // ],

  // Custom Provider useValue

  // providers: [
  //   UserService,
  //   {
  //     provide: 'STORE_CONFIG',
  //     useValue: {
  //       dir: 'store',
  //       path: 'user',
  //     } as StoreConfig,
  //   },
  // ],
})
export class UsersModule {}
