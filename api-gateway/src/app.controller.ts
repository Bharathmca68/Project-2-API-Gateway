import { Controller, Get } from '@nestjs/common';
import { map, zip } from 'rxjs';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/ping-a')
  ping_service_a() {
    return this.appService.pingServiceA()
  }


  @Get('/ping-b')
  ping_service_b() {
    return this.appService.pingServiceB()
  }


  @Get('/ping-all')
  pingAll() {
    return zip(
      this.appService.pingServiceA(),
      this.appService.pingServiceB(),
    ).pipe(
      map(([pongServiceA, pongServiceB]) => ({
        pongServiceA,
        pongServiceB,
      })),
    );
  }
}
