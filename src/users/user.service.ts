import { Inject, Injectable } from '@nestjs/common';
import { StoreConfig } from 'src/store/store.config';
import { UserDto } from 'src/users/user.dto';

@Injectable()
export class UserService {
//   constructor(@Inject('STORE_CONFIG') storeConfig: StoreConfig) {
//     console.log(storeConfig);
//   }
  create(user: UserDto): UserDto {
    // todo something insert to database
    return user;
  }
}
