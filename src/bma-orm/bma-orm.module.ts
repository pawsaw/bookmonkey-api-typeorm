import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

@Module({})
export class BmaOrmModule {
  static forRoot(): DynamicModule {
    return {
      module: BmaOrmModule,
      imports: [
        TypeOrmModule.forRoot({
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'ufocourier',
          password: 'Ufo246_',
          database: 'bookmonkey_apii',
          entities: [
            join(__dirname, `../**/*.entity.{ts,js}`),
            join(__dirname, `../**/*.relation.{ts,js}`),
          ],
          // entities: [join(__dirname, `../**/*.entity.{ts,js}`)],
          synchronize: true,
          logger: 'advanced-console',
          logging: true,
          dropSchema: true,
          namingStrategy: new SnakeNamingStrategy(),
        }),
      ],
      exports: [TypeOrmModule],
    };
  }
}
