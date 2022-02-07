import { EntityRepository, Repository } from 'typeorm';
import { Shop } from '../entities/shop.entity';

@EntityRepository(Shop)
export class ShopRepostiroy extends Repository<Shop> {}
