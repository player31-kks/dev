import { Module } from '@nestjs/common';
import { DeliveryService } from './delivery.service';
import { DeliveryController } from './delivery.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderRepository } from 'src/order/repository/order.repository';

@Module({
    imports: [TypeOrmModule.forFeature([OrderRepository])],
    controllers: [DeliveryController],
    providers: [DeliveryService],
})
export class DeliveryModule {}
