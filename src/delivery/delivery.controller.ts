import { Controller, Post, Body } from '@nestjs/common';
import { Order } from 'src/order/entities/order.entity';
import { DeliveryService } from './delivery.service';
import { DeliveryInputDto } from './dto/DeliveryInputDto';

@Controller('delivery')
export class DeliveryController {
    constructor(private readonly deliveryService: DeliveryService) {}

    @Post()
    create(@Body() input: DeliveryInputDto): Promise<Order> {
        return this.deliveryService.updatedOrder(input);
    }
}
