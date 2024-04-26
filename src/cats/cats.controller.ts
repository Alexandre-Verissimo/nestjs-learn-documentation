import { Body, Controller, Get, Param, Post, Query, Redirect, Req, Res } from "@nestjs/common";
import { CatsService } from "./cats.service";
import { CatsDto } from "./dto/cats.dto";


@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    @Get('findAll')
    findAll(@Res() res, @Req() req) {
        console.log('req: ', req )
        return this.catsService.findAll();
    }

    @Post('show')
    showCat(@Body() catDto: CatsDto, @Res() res: Response, @Req() req: Request) {

        return this.catsService.showCat(catDto, res, req);
    }

    @Get('docs')
    @Redirect('https://docs.nestjs.com', 302)
    getDocs(@Query('version') version, @Res() res) {
        if (version === '5') {
            return res.redirect('https://docs.nestjs.com/v5/')
        }
    }

    @Get(':id')
    findOne(@Param('id') id: string): string {
        console.log(id);
        return `This action returns a #${id} cat`;
    }

}