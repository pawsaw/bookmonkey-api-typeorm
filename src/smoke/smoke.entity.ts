import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Smoke {
  @PrimaryGeneratedColumn()
  id: number;
}
