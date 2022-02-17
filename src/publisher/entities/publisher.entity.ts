import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Book } from '../../books/entities/book.entity';
import { PublicObject } from '../../common/public-object/public-object.entity';

export enum PublisherType {
  INSTITUTIONAL = 'institutional',
  PERSON = 'person',
}

export type PublisherId = string;

@Entity()
export class Publisher extends PublicObject<PublisherId> {
  @Column({ type: 'enum', enum: PublisherType })
  type: PublisherType;

  @OneToMany(() => Book, 'publisher')
  books: Book[];
}
