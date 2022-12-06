import { UserDto } from './user.dto';
import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { plainToInstance } from 'class-transformer';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  createUser(@Body() user: UserDto): UserDto {
    console.log(user);
    return plainToInstance(UserDto, this.userService.create(user));
  }

  @Get(':id')
  getAllUsers(@Param('id') id: number) {
    console.log(id);
    return 'test';
  }
}
