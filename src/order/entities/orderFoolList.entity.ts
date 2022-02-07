import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from '../entities/order.entity';

@Entity()
export class OrderFoodList {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    foodName: string;

    @ManyToOne(() => Order)
    @JoinColumn()
    order: Order;
}
