import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExampleModule } from './example/example.module';

@Module({
  imports: [ClientsModule.register([
    {
      name: "SERVICE_A",
      transport: Transport.TCP,
      options: {
        host: "127.0.0.1",
        port: 8888
      }
    }
  ]), ExampleModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
