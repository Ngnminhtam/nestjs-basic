import { Injectable } from '@nestjs/common';
import { UserDto } from 'src/user.dto';

@Injectable()
export class UserService {
  createUser(user: any): any {
    user.createdAt = new Date();
    user.id = 1;
    user.updatedAt = new Date();
    console.log(user);
    return UserDto.plainToClass(user);
  }
}
