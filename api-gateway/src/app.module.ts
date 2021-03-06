import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ClientsModule.register([
    {
      name: "SERVICE_A",
      transport: Transport.TCP,
      options: {
        host: "127.0.0.1",
        port: 8888
      }
    },
    {
      name: "SERVICE_B",
      transport: Transport.TCP,
      options: {
        host: "127.0.0.1",
        port: 8881
      }
    }
  ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
