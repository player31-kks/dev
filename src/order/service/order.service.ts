import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from '../dto/CreateOrder.dto';
import { UpdateOrderDto } from '../dto/update-order.dto';
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

    findOne(id: number) {
        return `This action returns a #${id} order`;
    }

    update(id: number, updateOrderDto: UpdateOrderDto) {
        return `This action updates a #${id} order`;
    }

    remove(id: number) {
        return `This action removes a #${id} order`;
    }
}
