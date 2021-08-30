import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { delay, of } from 'rxjs';

@Controller()
export class AppController {

  @Get()
  @MessagePattern({ cmd: "pingb" })
  ping(_: any) {
    return of("pong from service-B").pipe(delay(1000));
  }
}
