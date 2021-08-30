import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ExampleController } from './example.controller';
import { ExampleService } from './example.service';

@Module({
  imports: [ClientsModule.register([
    {
      name: "SERVICE_B",
      transport: Transport.TCP,
      options: {
        host: "127.0.0.1",
        port: 8881
      }
    }
  ])],
  controllers: [ExampleController],
  providers: [ExampleService]
})
export class ExampleModule { }
