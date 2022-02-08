import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from '../dto/CreateOrder.dto';
import { Order } from '../entities/order.entity';
import { OrderFoodList } from '../entities/orderFoolList.entity';
import { OrderRepository } from '../repository/order.repository';

@Injectable()
export class OrderService {
    constructor(private readonly repository: OrderRepository) {}

    async create(createOrderDto: CreateOrderDto): Promise<Order> {
        // order 생성후에 foodlist를 만들어줘야함!!
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
}
