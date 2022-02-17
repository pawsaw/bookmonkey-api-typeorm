import { CreateDateColumn, UpdateDateColumn, Column } from 'typeorm';

export class Life {
  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  deactivatedAt?: Date;
}
