import { Injectable } from '@nestjs/common';
import { CreateMenuDto } from '../dto/CreateMenu.dto';
import { Menu } from '../entities/menu.entity';
import { MenuRepository } from '../repository/menu.repository';

@Injectable()
export class MenuService {
    constructor(private readonly repository: MenuRepository) {}

    create(data: CreateMenuDto): Promise<Menu> {
        const menu = new Menu();
        menu.foodName = data.foodName;
        menu.shopId = data.shop;
        return this.repository.save(menu);
    }

    findAll(): Promise<Menu[]> {
        return this.repository.find();
    }

    getByShop(shopId: number): Promise<Menu[]> {
        return this.repository.find({ shopId });
    }
}
