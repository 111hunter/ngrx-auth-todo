import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TodoDto } from './todo.dto';
import { TodoEntity } from 'src/entities/todo.entity';

@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(TodoEntity)
        private readonly todoRepository: Repository<TodoEntity>,
    ) { }

    async findAll(): Promise<TodoEntity[]> {
        return this.todoRepository.find();
    }

    async create(todoDto: TodoDto) {
        return await this.todoRepository.save(todoDto)
    }

    async delete(id: number) {
        return await this.todoRepository.delete(id)
    }

    async update(todoDto: TodoDto) {
        await this.todoRepository.update(todoDto.id, todoDto);
        return await this.todoRepository.findOne(todoDto.id)
    }

    async findOne(id: number): Promise<TodoEntity> {
        return await this.todoRepository.findOne(id)
    }
}