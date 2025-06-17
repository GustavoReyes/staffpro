import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from './roles.decorator';

import { EmployeeService } from 'src/employee/employee.service';

@Injectable()
 export class RolesGuard implements CanActivate {
 
   constructor(private reflector: Reflector,
                  private employeeService: EmployeeService ) {}


  async canActivate( context: ExecutionContext ):  Promise<boolean>   {
      
      const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
      ]);
      if (!requiredRoles || requiredRoles.length === 0) {
      return true; // No se requiere rol específico
      }
     const request = context.switchToHttp().getRequest();
    const user = request.user;
    console.log('user desde token:', user);

    const employee = await this.employeeService.findByUserId(user.id_user);
    console.log('employee desde user:', employee);
    // Verificar si el empleado existe
    if (!employee) throw new ForbiddenException('No empleado asignado');

    // Determinar el "rol" a partir del department_id
    const role = employee.department_id === 1 ? 'admin' : 'user';
    console.log('rol del empleado:', role);

    if (!requiredRoles.includes(role)) {
      console.log('roles requeridos:', requiredRoles);
      console.log('rol del empleado no coincide con los requeridos');
      throw new ForbiddenException('No tienes permiso para acceder');
    }

    return true;
  }
  }

