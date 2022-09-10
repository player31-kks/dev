import { Module } from '@nestjs/common';
import { BossService } from './boss.service';
import { BossController } from './boss.controller';
import { OrderModule } from 'src/order/order.module';

@Module({
    imports: [OrderModule],
    controllers: [BossController],
    providers: [BossService],
})
export class BossModule {}
