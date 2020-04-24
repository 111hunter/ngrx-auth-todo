import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AbstractEntity } from './abstract-entity';

@Entity('todo')
export class TodoEntity extends AbstractEntity {

    @Column('text')
    text: string;
}
