import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BmaOrmModule } from './bma-orm/bma-orm.module';
import { BooksModule } from './books/books.module';
import { PublisherModule } from './publisher/publisher.module';
import { AuthorModule } from './author/author.module';

@Module({
  imports: [BmaOrmModule.forRoot(), BooksModule, PublisherModule, AuthorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
