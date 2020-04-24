import { Controller, Get, Body, Post, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoDto } from './todo.dto';
import { ApiTags } from '@nestjs/swagger';
import { TodoEntity } from 'src/entities/todo.entity';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Todo')
@Controller('todos')
export class TodoController {
    constructor(private readonly todoService: TodoService) { }

    @Get()
    findAll(): Promise<TodoEntity[]> {
        return this.todoService.findAll();
    }

    @Post()
    @UseGuards(AuthGuard('jwt'))
    create(@Body() TodoDto: TodoDto) {
        return this.todoService.create(TodoDto)
    }

    @Delete(':id')
    @UseGuards(AuthGuard('jwt'))
    delete(@Param('id') id: number) {
        return this.todoService.delete(id)
    }

    @Put(':id')
    @UseGuards(AuthGuard('jwt'))
    update(@Param('id') id: number, @Body() TodoDto: TodoDto) {
        return this.todoService.update(TodoDto)
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<TodoEntity> {
        return this.todoService.findOne(id)
    }
}