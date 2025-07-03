import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('cases')
export class Case {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  caseNumber: number;

  @Column()
  typeCase: string;

  @Column()
  severity: string;

  @Column()
  status: string;

  @Column()
  summary: string;

  @Column({ default: false })
  isDeleted: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
