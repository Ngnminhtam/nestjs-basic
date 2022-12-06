import { UserDto } from 'src/users/user.dto';
export class UsersMockService {
  create(user: UserDto): UserDto {
    return {
      name: 'Tam',
      username: 'abc',
      password: '123',
    };
  }
}
