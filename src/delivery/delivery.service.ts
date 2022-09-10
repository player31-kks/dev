import { Injectable } from '@nestjs/common';
import { Order } from 'src/order/entities/order.entity';
import { OrderService } from 'src/order/service/order.service';
import { DeliveryInputDto } from './dto/DeliveryInputDto';

@Injectable()
export class DeliveryService {
    constructor(private readonly orderService: OrderService) {}

    async updatedOrder(input: DeliveryInputDto): Promise<Order> {
        return this.orderService.updateOrder(input.orderId, { category: 'finish', deliverFinish: input.deliverFinish });
    }
}
