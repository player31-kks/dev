import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { BossService } from './boss.service';
import { BossInputDto } from './dto/BossInputDto';

@Controller('boss')
export class BossController {
    constructor(private readonly bossService: BossService) {}

    @Post()
    create(@Body() input: BossInputDto) {
        return this.bossService.updatedOrder(input);
    }

    @Get('order/:shopId')
    findOrderByShop(@Param('shopId') id: number) {
        return this.bossService.findByShop(id);
    }

    @Get()
    findAll() {
        return this.bossService.findAll();
    }
}
