import { Global, Module } from '@nestjs/common';
import { createClient, RedisClientType } from 'redis';
import { RedisService } from './redis.service';

@Global()
@Module({
  providers: [RedisService,
    {
      provide: 'REDIS_CLIENT',
      async useFactory() {
        const client: RedisClientType = createClient({
          socket: {
            host: 'localhost',
            port: 6379
          }
        });
        await client.connect();
        return client;
      }
    }
  ],
  exports: [RedisService]
})
export class RedisModule { }
