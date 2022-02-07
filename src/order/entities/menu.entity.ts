import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Shop } from './shop.entity';

@Entity()
export class Menu {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Shop, { nullable: false, cascade: true })
    @JoinColumn()
    shop: Shop;

    @Column({ nullable: false })
    shopId: number;

    @Column()
    foodName: string;
}
