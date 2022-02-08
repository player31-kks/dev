import { EntityRepository, getRepository, Repository } from 'typeorm';
import { Order } from '../entities/order.entity';
import { OrderFoodList } from '../entities/orderFoolList.entity';

@EntityRepository(Order)
export class OrderRepository extends Repository<Order> {
    async saveFood(foodList: OrderFoodList[]): Promise<OrderFoodList[]> {
        return getRepository(OrderFoodList).save(foodList);
    }

    async findOrderByShopId(shopId: number): Promise<Order[]> {
        return this.find({ shopId });
    }
}
