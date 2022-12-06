import { UserDto } from './../user.dto';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Post()
  createUser(@Body() user: UserDto): UserDto {
    user.createdAt = new Date();
    user.id = 1;
    user.updatedAt = new Date();
    console.log(user);
    return UserDto.plainToClass(user);
  }

  @Get(':id')
  getAllUsers(@Param('id') id: number) {
    console.log(id);
    return 'test';
  }
}
