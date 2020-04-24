import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import * as bcrypt from 'bcryptjs';
import { IsEmail } from 'class-validator';
import { AbstractEntity } from './abstract-entity';

@Entity('user')
export class UserEntity extends AbstractEntity {

    @Column()
    username: string

    @Column()
    password: string

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hashSync(this.password, 10);
    }
}
