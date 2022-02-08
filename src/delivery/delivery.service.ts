import { Injectable } from '@nestjs/common';
import { Order } from 'src/order/entities/order.entity';
import { OrderRepository } from 'src/order/repository/order.repository';
import { DeliveryInputDto } from './dto/DeliveryInputDto';

@Injectable()
export class DeliveryService {
    constructor(private readonly orderRepository: OrderRepository) {}

    async updatedOrder(input: DeliveryInputDto): Promise<Order> {
        const order = await this.orderRepository.findOne(input.orderId);
        order.changeDeliverFinish(input.deliverFinish);
        return this.orderRepository.save(order);
    }
}
