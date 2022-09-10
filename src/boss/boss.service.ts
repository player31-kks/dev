import { Injectable } from '@nestjs/common';
import { Order } from 'src/order/entities/order.entity';
import { OrderRepository } from 'src/order/repository/order.repository';
import { OrderService } from 'src/order/service/order.service';
import { BossInputDto } from './dto/BossInputDto';

@Injectable()
export class BossService {
    constructor(private readonly orderService: OrderService) {}

    async updatedOrder(input: BossInputDto): Promise<Order> {
        return this.orderService.updateOrder(input.orderId, { category: 'start', estimatedTime: input.estimatedTime });
    }

    async findAll(): Promise<Order[]> {
        return this.orderService.findAll();
    }

    async findByShop(shopId: number): Promise<Order[]> {
        return this.orderService.findByShop(shopId);
    }
}
