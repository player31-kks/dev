import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { CreateShopDto } from './dto/CreateShop.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { Shop } from './entities/shop.entity';
import { OrderRepository } from './repository/order.repository';
import { ShopRepostiroy } from './repository/shop.repository';

@Injectable()
export class OrderService {
    constructor(private readonly orderRepository: OrderRepository, private readonly shopRepository: ShopRepostiroy) {}

    create(createOrderDto: CreateOrderDto) {
        return 'This action adds a new order';
    }

    createShop(createShopDto: CreateShopDto): Promise<Shop> {
        return this.shopRepository.save(createShopDto);
    }

    async findShops(): Promise<Shop[]> {
        return this.shopRepository.find();
    }

    async findAll(): Promise<Order[]> {
        return this.orderRepository.find({});
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
