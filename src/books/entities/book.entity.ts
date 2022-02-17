import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { PublicObject } from '../../common/public-object/public-object.entity';
import { Publisher } from '../../publisher/entities/publisher.entity';
import { BookHasAuthor } from './book-has-author.relation';

export type BookId = string;

export enum BookGenre {
  FANTASY = 'fantasy',
  EDU = 'edu',
}

@Entity()
export class Book extends PublicObject<BookId> {
  @Column()
  title: string;

  @Column({ type: 'enum', enum: BookGenre })
  genre: BookGenre;

  @Column({ nullable: true })
  subtitle?: string;

  @Column()
  numPages: number;

  @ManyToOne(() => Publisher)
  publisher: Publisher;

  @OneToMany(() => BookHasAuthor, 'books')
  authors: BookHasAuthor[];
}
