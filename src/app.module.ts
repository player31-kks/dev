import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './order/order.module';
import { BossModule } from './boss/boss.module';
import { DeliveryModule } from './delivery/delivery.module';

@Module({
    imports: [
        OrderModule,
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: 'sqlite3',
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true,
        }),
        BossModule,
        DeliveryModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
