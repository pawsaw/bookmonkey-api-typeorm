import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { Life } from './life.embedded';

export abstract class PublicObject<IdType = string> {
  @PrimaryGeneratedColumn('uuid')
  id: IdType;

  @Column(() => Life, { prefix: '' })
  life: Life;
}
