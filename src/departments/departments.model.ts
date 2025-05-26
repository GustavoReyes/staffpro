import { User } from 'src/users/user.model';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
 
@Entity('departments')
export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

 
  @OneToMany(() => User, (user) => user.department)
  users: User[];
}
