import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { Order } from 'src/order/entities/order.entity';
import { BossService } from './boss.service';
import { BossInputDto } from './dto/BossInputDto';

@Controller('boss')
export class BossController {
    constructor(private readonly bossService: BossService) {}

    @Post()
    create(@Body() input: BossInputDto): Promise<Order> {
        return this.bossService.updatedOrder(input);
    }

    @Get('order/:shopId')
    findOrderByShop(@Param('shopId') id: number): Promise<Order[]> {
        return this.bossService.findByShop(id);
    }

    @Get()
    findAll(): Promise<Order[]> {
        return this.bossService.findAll();
    }
}
