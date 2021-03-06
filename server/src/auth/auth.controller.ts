import { UserDto } from './../user/user.dto';
import { Body, Controller, Get, Post, UseGuards, Res, Request } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger'
import { AuthService } from 'src/auth/auth.service'

@ApiBearerAuth()
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
    ) { }

    @UseGuards(AuthGuard('jwt'))
    @Get('users')
    async findAll(@Request() req): Promise<any[]> {
        return await this.authService.findAll();
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('whoami')
    showMe(@Request() req) {
        return this.authService.findOne(req.user.username);
    }

    @Post('signUp')
    async register(@Body() req: UserDto, @Res() res) {
        const result = await this.authService.register(req);
        res.status(result.statusCode).send(result);
    }

    @UseGuards(AuthGuard('local'))
    @Post('signIn')
    async login(@Body() @Request() req: UserDto, @Res() res) {
        const result = await this.authService.login(req);
        res.status(result.statusCode).send(result);
    }
}
