import { Injectable } from "@nestjs/common";
import { CatsDto } from "./dto/cats.dto";

@Injectable()
export class CatsService {

    findAll() {
        return 'this action return all cats';
    }

    showCat(catDto: CatsDto, res: Response, req: Request) {
        console.log('req: ', req);
        console.log('res: ', res);
        return catDto; 
    }
}