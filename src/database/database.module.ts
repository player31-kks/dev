import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                type: 'mysql',
                host: configService.get('MYSQL_HOST'), // 데이터 베이스 엔드 포인트
                port: 3306, // 데이터 베이스 포트
                username: configService.get('MYSQL_USER'),
                password: configService.get('MYSQL_PASSWORD'),
                database: configService.get('MYSQL_DATABASE'),
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                charset: 'utf8mb4',
                synchronize: true,
            }),
        }),
    ],
})
export class DatabaseModule {}
