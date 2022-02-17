import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Author } from '../../author/entities/author.entity';
import { Book } from './book.entity';

@Entity({
  orderBy: {
    sort: 'ASC',
  },
})
export class BookHasAuthor {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne(() => Book, 'authors')
  book: Book;

  @ManyToOne(() => Author, 'books')
  author: Author;

  @Column()
  sort: number;
}
