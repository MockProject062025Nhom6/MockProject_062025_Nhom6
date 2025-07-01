import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryColumn({ unique: true })
    userName: string;

    @Column()
    password: string;

    @Column()
    fullName: string;

    @Column({ default: null })
    avatarUrl: string;

    @Column()
    email: string;

    @Column()
    phoneNumber: string;

    // role_id
    @Column({ default: false })
    isDeleted: boolean;

    @Column({ type: 'text', nullable: true })
    refreshToken: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}