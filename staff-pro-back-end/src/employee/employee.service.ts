import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Employee } from './employee.model';
@Injectable()

export class EmployeeService {
  constructor(@InjectRepository(Employee)
  private readonly employeeRepository: Repository<Employee>) {
  }

  /**
   *Crea un nuevo usuario en la base de datos, el método save: si ya estaba creado lo actualiza
   *
   * @param {User} Objeto parcial que contiene los datos del nuevo usuario.
   * @return {*}  {Promise<User>} El usuario creado, con todos sus campos completos desde la base de datos.
   * @memberof UserService
   */
  async create(employee: Employee): Promise<Employee> {
    return await this.employeeRepository.create(employee)
  }

  /**
   *Devuelve un array de todos los usuarios y sus datos
   * 
   * @return {*}  {Promise<User[]>}
   * @memberof UserService
   */
  async findAll(): Promise<Employee[]> {
    return await this.employeeRepository.find();
  }

  /**
   *Encuentra un usuario mediante su dni
   *
   * @param {string} dni 
   * @return {*}  {Promise<User>} devuelve los datos de usuario. Puede dar null
   * @memberof UserService
   */
  async findByDni(dni: string): Promise<Employee> {
    return await this.employeeRepository.findOneBy({ dni });
  }

  /**
   *Encuentra todos los empleados de un mismo departamento
   *
   * @param {number} department_id del 1 al 4
   * @return {*}  {Promise<User[]>}
   * @memberof UserService
   */
  async findByDepartmentId(department_id: number): Promise<Employee[]> {
    return await this.employeeRepository.findBy({ department_id });
  }

  /**
   *Encuentra todos los usuarios de un mismo rol y departamento
   *
   * @param {string} role Puede ser jefe(chief), empleado(employee) o recursos humanos(hr)
   * @param {number} department_id 1 de recursos humanos,puede ser 2,3, o 4
   * @return {*}  {Promise<User[]>}
   * @memberof UserService
   */
  async findByRoleAndDepartmentId(role: string, department_id: number): Promise<Employee[]> {
    return await this.employeeRepository.find({
      where: {
        role: role,
        department_id: department_id,
      },
    });
  }

  /**
   *Actualizar información de un usuario.
   *
   * @param {string} dni
   * @param {Partial<User>} updateData es Partial para que no sea obligatorio que actualice todos los datos
   * @return {*}  {(Promise<User>)} por si no hay un usuario encontrado
   * @memberof UserService
   */
  async update(dni: string, updateData: Partial<Employee>): Promise<Employee> {
    const user = await this.employeeRepository.findOneBy({ dni });
    if (!user) {
      return null;
    }
    const updatedUser = this.employeeRepository.merge(user, updateData);
    return await this.employeeRepository.save(updatedUser);
  }

  /**
   *borra un usuario por dni.
   si lo encuentra y borra affected indica 1 (filas afectadas), lo cotrario, 0 filas afectadas
   *
   * @param {string} dni
   * @return {*}  {Promise<boolean>} devuelve true si borra usuario con ese dni, lo contrario false
   * @memberof UserService
   */
  async delete(dni: string): Promise<boolean> {
    const result = await this.employeeRepository.delete({ dni });
    return result.affected !== 0;
  }
}