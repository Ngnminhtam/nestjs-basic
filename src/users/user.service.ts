import { Injectable } from '@nestjs/common';
import { UserDto } from 'src/users/user.dto';

@Injectable()
export class UserService {
  create(user: UserDto): UserDto {
    // todo something insert to database
    return user;
  }
}
