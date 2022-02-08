import { Module } from '@nestjs/common';
import { BossService } from './boss.service';
import { BossController } from './boss.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderRepository } from 'src/order/repository/order.repository';

@Module({
    imports: [TypeOrmModule.forFeature([OrderRepository])],
    controllers: [BossController],
    providers: [BossService],
})
export class BossModule {}
