import { PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

export default abstract class BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @CreateDateColumn({ default: () => "CURRENT_TIMESTAMP", name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ default: () => "CURRENT_TIMESTAMP", name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ nullable: true, name: 'deleted_at' })
  deletedAt: Date;
}