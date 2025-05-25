import { Injectable } from '@nestjs/common';
import { User } from './user.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

 
@Injectable()

export class UserService {
 constructor(@InjectRepository(User)
 private readonly userRepository: Repository<User>){
}


/**
 *Crea un nuevo usuario en la base de datos, el método save: si ya estaba creado lo actualiza
 *
 * @param {User} Objeto parcial que contiene los datos del nuevo usuario.
 * @return {*}  {Promise<User>} El usuario creado, con todos sus campos completos desde la base de datos.
 * @memberof UserService
 */
async create(user: User):Promise<User> {
return await this.userRepository.create(user)
}

/**
 *Devuelve un array de todos los usuarios y sus datos
 * 
 * @return {*}  {Promise<User[]>}
 * @memberof UserService
 */
async findAll():Promise<User[]> {
return await this.userRepository.find();
}

/**
 *Encuentra un usuario mediante su dni
 *
 * @param {string} dni 
 * @return {*}  {Promise<User>} devuelve los datos de usuario. Puede dar null
 * @memberof UserService
 */
async findByDni(dni: string): Promise<User> {
  return await this.userRepository.findOneBy({ dni });
}

/**
 *Encuentra todos los empleados de un mismo departamento
 *
 * @param {number} departmentId del 1 al 4
 * @return {*}  {Promise<User[]>}
 * @memberof UserService
 */
async findByDepartmentId(departmentId: number): Promise<User[]> {
  return await this.userRepository.find( );
}

/**
 *Encuentra todos los usuarios de un mismo rol y departamento
 *
 * @param {string} role Puede ser jefe(chief), empleado(employee) o recursos humanos(hr)
 * @param {number} departmentId 1 de recursos humanos,puede ser 2,3, o 4
 * @return {*}  {Promise<User[]>}
 * @memberof UserService
 */
async findByRoleAndDepartmentId(role:string, departmentId:number) :Promise<User[]>{
return await this.userRepository.find({where: {
role: role,
 departmentId: departmentId,
 },});
}

  

/**
 *Actualizar información de un usuario.
 *
 * @param {string} dni
 * @param {Partial<User>} updateData es Partial para que no sea obligatorio que actualice todos los datos
 * @return {*}  {(Promise<User>)} por si no hay un usuario encontrado
 * @memberof UserService
 */
async update(dni: string, updateData: Partial<User>): Promise<User > {
  const user = await this.userRepository.findOneBy({ dni });
  if (!user) {
    return null; 
  }
  const updatedUser = this.userRepository.merge(user, updateData);
  return await this.userRepository.save(updatedUser);
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
  const result = await this.userRepository.delete({ dni });
  return result.affected !== 0;
}
}
