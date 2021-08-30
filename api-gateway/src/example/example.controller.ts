import { Controller, Get } from '@nestjs/common';
import { ExampleService } from './example.service';

@Controller('example')
export class ExampleController {

    constructor(private readonly exampleService: ExampleService) { }

    @Get('/ping-b')
    getserviceB() {
        return this.exampleService.pingServiceB()
    }
}
