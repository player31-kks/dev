import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from '../dto/CreateOrder.dto';
import { Order } from '../entities/order.entity';
import { OrderFoodList } from '../entities/orderFoolList.entity';
import { OrderRepository } from '../repository/order.repository';

@Injectable()
export class OrderService {
    constructor(private readonly repository: OrderRepository) {}

    async create(createOrderDto: CreateOrderDto): Promise<Order> {
        const order = new Order();
        order.shopId = createOrderDto.shopId;
        order.address = createOrderDto.adderss;
        await this.repository.save(order);

        const foodList: OrderFoodList[] = [];
        for (const food of createOrderDto.foodList) {
            const orderFoodList = new OrderFoodList();
            orderFoodList.foodName = food;
            orderFoodList.order = order;
            foodList.push(orderFoodList);
        }

        await this.repository.saveFood(foodList);
        return order;
    }

    async findAll(): Promise<Order[]> {
        return this.repository.find({});
    }

    async findByShop(shopId: number): Promise<Order[]> {
        return this.repository.findOrderByShopId(shopId);
    }

    async updateOrder(
        orderId: number,
        input: { category: 'start'; estimatedTime: number } | { category: 'finish'; deliverFinish: boolean },
    ): Promise<Order> {
        const order = await this.repository.findOne(orderId);
        if (input.category === 'start') {
            order.changeEstimatedTime(input.estimatedTime);
        }
        if (input.category === 'finish') {
            order.changeDeliverFinish(input.deliverFinish);
        }
        return this.repository.save(order);
    }
}
