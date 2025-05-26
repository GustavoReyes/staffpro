import { Department } from 'src/departments/departments.model';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

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
  department_id?: number;

  @ManyToOne(() => Department, (department) => department.users)
  @JoinColumn({ name: 'department_id' }) 
  department: Department;
}


