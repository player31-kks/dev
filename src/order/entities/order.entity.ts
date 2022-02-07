import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Shop } from './shop.entity';

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Shop)
    @JoinColumn()
    shop: Shop;

    @Column()
    shopId: number;

    @Column()
    address: string;

    @CreateDateColumn()
    orderDate: Date;

    @Column({ type: Number, default: -1 })
    estimatedTime: number;

    @Column({ type: Boolean })
    deliverFinish: boolean;
}
