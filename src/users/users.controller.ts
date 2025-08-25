import {
  Controller,
  Get,
  Post,
  Param,
  Query,
  Body,
  ParseIntPipe,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('{/:id}')
  public getUsers(
    @Param('id', ParseIntPipe) id: number | undefined,
    @Query('limit') limit: any,
  ) {
    console.log(typeof id);
    console.log(typeof limit);
    return 'You sent a get request to users endpoint';
  }

  @Post()
  public createUsers(@Body() request: any) {
    console.log(request);
    return 'You sent a post request to users endpoint';
  }
}
