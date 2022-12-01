import { Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Get()
  getAllUsers() {
    return [
      {
        name: 'tam',
        age: 20,
      },
      {
        name: 'phong',
        age: 20,
      },
    ];
  }

  @Post()
  createUser() {
    return {
      name: 'tam',
      age: 20,
    };
  }
}
