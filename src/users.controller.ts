import { Controller, Get, Post, Body, Put, Param, ParseIntPipe, Delete } from '@nestjs/common';
import { CreateUserDto } from './dto/createuser.dto';
import { UpdateUserDto } from './dto/updateuser.dto';
import { UsersService } from './users.services';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService){

    }

    @Get()
    getUsers(){
        return this.userService.getUser();
    }

    @Post()
    createUser(@Body() CreateUserDto: CreateUserDto){
        return this.userService.createUser(CreateUserDto);
    }

    @Put(':id')
    async updateUser(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto) {
        await this.userService.updateUser(id, updateUserDto);
    }

    @Delete(':id')
    async deleteUser(@Param('id', ParseIntPipe) id: number){
        await this.userService.deleteUser(id);
    }
}