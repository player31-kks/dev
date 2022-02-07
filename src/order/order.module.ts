import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderRepository } from './repository/order.repository';
import { ShopRepostiroy } from './repository/shop.repository';

@Module({
    imports: [TypeOrmModule.forFeature([OrderRepository, ShopRepostiroy])],
    controllers: [OrderController],
    providers: [OrderService],
})
export class OrderModule {}
