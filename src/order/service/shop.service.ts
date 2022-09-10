import { Injectable } from '@nestjs/common';
import { CreateShopDto } from '../dto/CreateShop.dto';
import { Shop } from '../entities/shop.entity';
import { ShopRepository } from '../repository/shop.repository';

@Injectable()
export class ShopService {
    constructor(private readonly repository: ShopRepository) {}

    async create(createShopDto: CreateShopDto): Promise<Shop> {
        return this.repository.save(createShopDto);
    }

    async findAll(): Promise<Shop[]> {
        return this.repository.find();
    }
}
