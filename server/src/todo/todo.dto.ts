import { IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';

export class TodoDto {

    @ApiProperty()
    readonly id?: number;

    @ApiProperty()
    @IsString()
    readonly text: string;

}