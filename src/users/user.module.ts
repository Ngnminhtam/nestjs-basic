import { UserService } from './user.service';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UsersMockService } from './user-mock.serviec';
import { StoreConfig } from 'src/store/store.config';
import { StoreService } from './store.service';

function createStore(config: StoreConfig): StoreService {
  console.log(config);
  return new StoreService();
}
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

  // Custom Provider useValue and Factory

  // providers: [
  //   UserService,
  //   {
  //     provide: 'STORE_CONFIG',
  //     useValue: {
  //       dir: 'store',
  //       path: 'user',
  //     } as StoreConfig,
  //   },
  //   {
  //     provide: 'STORE_SERVICE',
  //     useFactory: createStore,
  //     inject: [
  //       {
  //         token: 'STORE_CONFIG',
  //         optional: true,
  //       },
  //     ],
  //   },
  // ],
})
export class UsersModule {}
