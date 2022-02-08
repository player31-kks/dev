import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { OrderService } from './service/order.service';
import { CreateShopDto } from './dto/CreateShop.dto';
import { ShopService } from './service/shop.service';
import { MenuService } from './service/menu.service';
import { Shop } from './entities/shop.entity';
import { Order } from './entities/order.entity';
import { CreateMenuDto } from './dto/CreateMenu.dto';
import { Menu } from './entities/menu.entity';
import { CreateOrderDto } from './dto/CreateOrder.dto';

@Controller('order')
export class OrderController {
    constructor(
        private readonly orderService: OrderService,
        private readonly shopService: ShopService,
        private readonly menuService: MenuService,
    ) {}

    @Post('/')
    createOrder(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
        return this.orderService.create(createOrderDto);
    }

    @Post('/shop')
    createShop(@Body() createShopDto: CreateShopDto): Promise<Shop> {
        return this.shopService.create(createShopDto);
    }

    @Get('/shop')
    showShop(): Promise<Shop[]> {
        return this.shopService.findAll();
    }

    @Post('/menu')
    creatMenu(@Body() createMenuDto: CreateMenuDto): Promise<Menu> {
        return this.menuService.create(createMenuDto);
    }

    @Get('/menu')
    showMenuAll(): Promise<Menu[]> {
        return this.menuService.findAll();
    }

    @Get('menu/:shopId')
    showMenuByShop(@Param('shopId') shopId: number): Promise<Menu[]> {
        return this.menuService.getByShop(shopId);
    }

    @Get()
    findAll(): Promise<Order[]> {
        return this.orderService.findAll();
    }
}
