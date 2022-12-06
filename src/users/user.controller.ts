import { UserDto } from './../user.dto';
import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(
    @Inject('USER_SERVICE_TAM') private readonly userService: UserService,
  ) {}
  @Post()
  createUser(@Body() user: UserDto): UserDto {
    return this.userService.createUser(user);
  }

  @Get(':id')
  getAllUsers(@Param('id') id: number) {
    console.log(id);
    return 'test';
  }
}
