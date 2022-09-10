import { Module } from '@nestjs/common';
import { DeliveryService } from './delivery.service';
import { DeliveryController } from './delivery.controller';
import { OrderModule } from 'src/order/order.module';

@Module({
    imports: [OrderModule],
    controllers: [DeliveryController],
    providers: [DeliveryService],
})
export class DeliveryModule {}
