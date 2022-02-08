import { Injectable } from '@nestjs/common';
import { Order } from 'src/order/entities/order.entity';
import { OrderRepository } from 'src/order/repository/order.repository';
import { BossInputDto } from './dto/BossInputDto';

@Injectable()
export class BossService {
    constructor(private readonly orderRepository: OrderRepository) {}

    async updatedOrder(input: BossInputDto): Promise<Order> {
        const order = await this.orderRepository.findOne(input.orderId);
        order.changeEstimatedTime(input.estimatedTime);
        return this.orderRepository.save(order);
    }

    findAll(): Promise<Order[]> {
        return this.orderRepository.find({});
    }

    findByShop(shopId: number): Promise<Order[]> {
        return this.orderRepository.findOrderByShopId(shopId);
    }
}
