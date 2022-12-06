import { Inject, Injectable } from '@nestjs/common';
import { StoreConfig } from 'src/store/store.config';
import { UserDto } from 'src/users/user.dto';
import { StoreService } from './store.service';

@Injectable()
export class UserService {
//   constructor(
//     @Inject('STORE_CONFIG') storeConfig: StoreConfig,
//     @Inject('STORE_SERVICE') private storeService: StoreService,
//   ) {}
  create(user: UserDto): UserDto {
    // this.storeService.save(user);
    // todo something insert to database
    return user;
  }
}
