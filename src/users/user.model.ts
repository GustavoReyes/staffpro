import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users') 
export class User {
  @PrimaryGeneratedColumn()
  dni: string;

   @Column({ nullable: true })
  name?: string;

  @Column({ nullable: true })
  email?: string;

  @Column({ nullable: true })
  role?: string;

  @Column({ nullable: true })
  password?: string;

  @Column({ nullable: true })
  departmentId?: number;
}


