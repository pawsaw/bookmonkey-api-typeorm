import { Column, Entity, OneToMany } from 'typeorm';
import { BookHasAuthor } from '../../books/entities/book-has-author.relation';
import { PublicObject } from '../../common/public-object/public-object.entity';

export type AuthorId = string;

@Entity()
export class Author extends PublicObject<AuthorId> {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @OneToMany(() => BookHasAuthor, 'author')
  books: BookHasAuthor[];
}
