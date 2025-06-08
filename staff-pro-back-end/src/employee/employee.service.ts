import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Employee } from './employee.model';
import { EmployeeAltaDto } from './dtos/employeeAltaDto';

import { User } from 'src/users/user.model';
import { EmployeeDatosDto } from './dtos/employeeDatos.dto';


@Injectable()

export class EmployeeService {
  constructor(@InjectRepository(Employee)
  private readonly employeeRepository: Repository<Employee>,
  @InjectRepository(User)
  private readonly userRepository: Repository<User>,
 private dataSource:DataSource) {
  }
  //crear un empleado asociado a un id_user
  //buscar por email, el email es unico y está asociado a un id_user
  //crear el empleado asociado al id_user
  async create(employee: EmployeeAltaDto, email:string): Promise<EmployeeDatosDto> {
  const user = await this.userRepository.createQueryBuilder('user')
  .where('user.email = :email', { email })
  .getOne();
  if (!user) {
    throw new NotFoundException('No existe un usuario con ese email');
  }
  const existingEmployee = await this.employeeRepository.createQueryBuilder('employee')
  .where('employee.user.id_user = :id_user', { id_user: user.id_user })
  .getOne();  
  if (existingEmployee) {
    throw new ConflictException('Ese usuario ya tiene una ficha de empleado asociado');
  }
  const newEmployee = this.employeeRepository.create({
    ...employee,
     user,

  }
  );
  const savedEmployee = await this.employeeRepository.save(newEmployee);  
  return savedEmployee;
  }

  async findAll(): Promise<EmployeeDatosDto[]> {
    return await this.employeeRepository.find();
  }

  async findByDepartmentId(department_id: number): Promise<EmployeeDatosDto[]> {
    return await this.employeeRepository.findBy({ department_id });
  }

 async findByEmail(email: string): Promise<EmployeeDatosDto | null> {
  const user = await this.userRepository.findOne({ where: { email } });
  if (!user) {
    throw new NotFoundException('No existe un usuario con ese email');
  }

  const existingEmployee = await this.employeeRepository.findOne({
    where: { user: { id_user: user.id_user } },
    relations: ['user'],
  });

  return existingEmployee || null;
}


  async findByUserId(id_user: number): Promise<EmployeeDatosDto> {
    return this.employeeRepository.findOne({
      where: { user: { id_user: id_user } },
      relations: ['user'],
    });
  }

 async updateByEmail(email: string, updateData: Partial<EmployeeAltaDto>): Promise<EmployeeDatosDto> {
  const user = await this.userRepository.findOne({ where: { email } });
  if (!user) {
    throw new NotFoundException('No existe un usuario con ese email');
  }

  const employee = await this.employeeRepository.findOne({
    where: { user: { id_user: user.id_user } },
    relations: ['user'],
  });

  if (!employee) {
    throw new NotFoundException('No existe ficha de empleado para ese usuario');
  }

  const updated = this.employeeRepository.merge(employee, updateData);
  return await this.employeeRepository.save(updated);
}

   async deleteByEmail(email: string): Promise<boolean> {
  const user = await this.userRepository.findOne({ where: { email } });
  if (!user) {
    throw new NotFoundException('No existe un usuario con ese email');
  }

  const result = await this.employeeRepository.delete({ user: { id_user: user.id_user } });
  return result.affected > 0;
}
}