import { Controller, Get, Post, Param, Query, Body } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/:id{/:optional}')
  public getUsers(@Param() params: any, @Query() query: any) {
    console.log(params);
    console.log(query);
    return 'You sent a get request to users endpoint';
  }

  @Post()
  public createUsers(@Body() body: any) {
    console.log(body);
    return 'You sent a post request to users endpoint';
  }
}
