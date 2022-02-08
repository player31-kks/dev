import { Module } from '@nestjs/common';
import { OrderService } from './service/order.service';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderRepository } from './repository/order.repository';
import { ShopRepostiroy } from './repository/shop.repository';
import { ShopService } from './service/shop.service';
import { MenuRepository } from './repository/menu.repository';
import { MenuService } from './service/menu.service';

@Module({
    imports: [TypeOrmModule.forFeature([OrderRepository, ShopRepostiroy, MenuRepository])],
    controllers: [OrderController],
    providers: [OrderService, ShopService, MenuService],
    exports: [TypeOrmModule],
})
export class OrderModule {}
