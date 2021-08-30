import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs';

@Injectable()
export class ExampleService {
    constructor(
        @Inject("SERVICE_B") private readonly clientServiceB: ClientProxy
    ) { }

    pingServiceB() {
        const startTs = Date.now();
        const pattern = { cmd: "pingb" };
        const payload = {};
        return this.clientServiceB
            .send<string>(pattern, payload)
            .pipe(
                map((message: string) => ({ message, duration: Date.now() - startTs }))
            );
    }
}
